import React from "react";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from "@mui/material";
import "./Lists.css";
import { Delete, MoneyOff } from "@mui/icons-material";

import {useContext} from "react";
import { ExpenseTrackerContext } from "../../context/context";


const Lists = () => {
  
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  // const transactions = [
  //   { id: 1, type: "Income", category: "Salary", amount: 50, date: new Date() },
  //   { id: 2, type: "Expense", category: "Books", amount: 50, date: new Date() },
  //   { id: 3, type: "Income", category: "Business", amount: 150, date: new Date() },
  // ];

  return (
    <div className="lists">
      <List dense={false} className="lists">
        {transactions.map((transaction) => {
          return (
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
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          );
        })}
      </List>
    </div>
  );
};

export default Lists;
