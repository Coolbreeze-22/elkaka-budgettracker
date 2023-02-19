import React, { useState } from "react";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from "@mui/material";
import "./Lists.css";
import { Delete, MoneyOff } from "@mui/icons-material";

import {useContext} from "react";
import { ExpenseTrackerContext } from "../../context/context";
import { useEffect } from "react";

const Lists = ({ setFormData }) => {
  
  const { deleteTransaction, transactions, updatedId, setUpdatedId, } = useContext(ExpenseTrackerContext);
  const [ deleteWarning, setDeleteWarning ] = useState();

  const change = transactions.find((t) => t.id === updatedId);
  useEffect(() => {
  if(change) {
    setFormData(change)
  }
}, [change, setFormData])

// const sortTransaction = transactions.slice().sort((a, b) => b.date > a.date ? 1 : -1 );

  return (
    <div className="lists">
      <List dense={false} className="lists">
        {/* {sortTransaction.map((transaction) => ( */}
        {transactions.slice().sort((a, b) => b.date > a.date ? 1 : -1 ).map((transaction) => (        
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? "avatarIncome"
                        : transaction.type === "Expense" ? "avatarExpense" : ""
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.category}
                  secondary={`$${transaction.amount} - ${transaction.date}`}
                />

                {deleteWarning !== transaction.id && <button  onClick={() => {setUpdatedId(transaction.id)} } style={{backgroundColor: "#173158", color: "white"}}>Edit</button>}
                <ListItemSecondaryAction>
                  {deleteWarning === transaction.id &&
                  <div style={{marginX: '10px'}}>
                    <h5>Delete permanently</h5>
                    <button  onClick={() => {deleteTransaction(transaction.id); setDeleteWarning() }} style={{backgroundColor:'red', color:"white", margin: '0 10px 0 25px'}}>Yes</button>
                    <button onClick={() => setDeleteWarning()} style={{backgroundColor:'green', color:"white"}}>No</button>
                  </div>}
                  {deleteWarning !== transaction.id && <IconButton edge="end" aria-label="delete" onClick={() => {setDeleteWarning(transaction.id)} }>
                    <Delete />
                  </IconButton>}
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ),
        )}
      </List>
    </div>
  );
};

export default Lists;
