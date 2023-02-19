import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ExpenseTrackerContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";
import { expenseCategories, incomeCategories } from "../../constants/categories";
import formatDate from "../../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";
import MySnackbar from '../MySnackbar/MySnackbar';
import Lists from "../Lists/Lists";

// i imported useCallback so i can use it to wrap the function of createTransaction since it is the only thing i can do so i can pass
// createTransaction inside the dependency array of useEffect, bcos it is compulsory to pass it inside that array bcos it was used inside useEffect.
// Note that if you stubbornly pass createTransaction inside the dependency array of useEffect without importing and setting up the
// useCallback, ur code will keep re-rendering in the browser and then crash it. but createTransaction already contains sets of data ready to execute when summoned anytime.

const initial = {
  amount: "",
  category: "",
  type: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initial); 
  const { addTransaction, updateTransaction, updatedId, setUpdatedId } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();
  const [ error, setError ] = useState("");
  const [ open, setOpen ] = useState(false);
  // console.log(formData);  

  const createTransaction = useCallback(() => {
    // if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-")) return; this would be useful if it is possible to type in letters in the input field for number,but its not possible cos we indicated that the input field is  = Number. And for date that does not include dash(-), i.e includes slash, but it's not possible bcos date format is already there in slash/ by default, and code isnt supposed to work while dat is in slash,but its working. weird.

    if(!formData.type ) {
      setError("Please add type");
    }
    else if(!formData.category) {
      setError("Please add category");
    }
    else if (formData.amount <= 0 ) {
      setError("Please add amount");
    }
    else if(!formData.date) {
      setError("Please add date");
    }
    else if(updatedId && formData.amount >= 1) {
      const transaction = {
        ...formData,
        id: updatedId
      }
      updateTransaction(transaction);
      setFormData(initial);
      setUpdatedId();
      setOpen(true);
    }
    else if(formData.amount >= 1 && formData.category && formData.type && formData.date){
      const transaction = {
        ...formData,
        amount: Number(formData.amount),
        id: uuidv4(),
      }
      addTransaction(transaction);
      setFormData(initial);
      setOpen(true);
    }
    },
    [addTransaction,  updateTransaction, updatedId, setUpdatedId, formData]);

  

  useEffect(() => {
    if(segment){
    if (segment.intent.intent === "add_expense") {
      setFormData({ ...formData, type: "Expense" });
    }
    else if (segment.intent.intent === "add_income") {
      setFormData({ ...formData, type: "Income" });
    }
    //  else if (
    //   segment.intent.isFinal &&
    //   segment.intent.intent === "create_transaction") {
    //   return createTransaction();
    // } 
    else if (
      segment.intent.isFinal &&
      segment.intent.intent === "cancel_transaction") {
      return setFormData(initial);
    }
    segment.entities.forEach((e) => {
      const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;

      switch (e.type) {
        case "amount":
          setFormData({ ...formData, amount: e.value });
          break;

        case "category":
          // the if statements are incase som1 mentions type income and then mentions expense categories, or type  expense and income categories
          if (incomeCategories.map((iC) => iC.type).includes(category)) {
            setFormData({ ...formData, type: "Income", category: category });
          } else if (
            expenseCategories.map((eC) => eC.type).includes(category)
          ) {
            setFormData({ ...formData, type: "Expense", category: category });
          }
          break;

        case "date":
          setFormData({ ...formData, date: e.value });
          break;
        default:
          break;
      }
    });

    // if (
    //   segment.intent.isFinal &&
    //   formData.amount &&
    //   formData.category &&
    //   formData.type &&
    //   formData.date
    // ) {
    //   createTransaction();
    // }
  }
  }, [segment]);

  const selectedCategories =
    formData.type === "Income"
      ? incomeCategories
      : formData.type === "Expense"
      ? expenseCategories
      : null;

      // const handleChange = (e) => {
      //   setFormData({ ...formData, [e.target.name]:e.target.value
      //   })
      //   setError("")
      // }
// Note...i am using this const handleChange to set a general function that will remove the error message of "add type", "add category" e.t.c,
// so i will not have to be adding setError("") in the codes down down around line 160 down where all formData info were set for all input field.
// I will only do it once here above, and once an input field is updated, either the error message disappears or it shows another error message.
// I will only use it for category and amount, and use the hard way i intend to abandon for type, so you can remember and know both.
// Again, u shiuld know that using handleChange requires that you use name= "type", or name= "category" instead of using value={formData.type} or
// value={formData.category} down around line 160 down.
// ohh
// note again.. i decided not to use handleChange for this project bcos it will necessitate that i abandone const initial state and change my "usestate"
// to usestate({}) instead of usestate(initialState). this is bcos when i create transactions, it does return the formdata to initialstate, and i intended
// to use two different methods here, of which one needs const initialstate while the other doesnt need it and instead needs usestate({}) instead of usestate(inialstate)
 
return (
  <div className="form">
    <Grid container spacing={2}>

      <MySnackbar open={open} setOpen={setOpen} />

      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && <> {segment.words.map((w) => w.value).join(" ")} </>}
          </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value}, setError(""))
            }
        >
          <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value}, setError(""))
            }
          >
            {selectedCategories?.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
            onChange={(e) =>
              {setFormData({ ...formData, amount: e.target.value}, setError("")) }
            }
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12} align="center" alignItems="center" sx={{paddingBottom:"5px", color:"red"}}>
          {error}
        </Grid>
      
      </Grid>
        <Button className="button" sx={{backgroundColor: '#173158'}} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
          Create
        </Button>
        <div style={{ textAlign: "center", marginTop: '10px' }}>
          <button style={{ backgroundColor: "#5c0202", color: "white" }}  onClick={() => {setFormData(initial); setUpdatedId(); setError()} }>Clear</button>
        </div>

        <Grid container >
          <Grid item xs={12}>
            <Lists setFormData={setFormData} />
          </Grid>
        </Grid>
      </div>
  );
};

export default Form;
