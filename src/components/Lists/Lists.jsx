import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@mui/material';
import React from 'react';
import './Lists.css';
import { Delete, MoneyOff } from '@mui/icons-material';


const Lists = () => {

  const transactions = [ {id: 1, type: "Income", category: 'Salary', amount: 50, date: new Date() } ];


  return (
    <div className="lists">
<List dense={false} className="lists">
  {transactions.map((transaction) => {
    return (
    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={transaction.type === 'Income' ? "avatarIncome" : "avatarExpense"}>
            <MoneyOff />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label='delete' onClick="">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Slide>)
  })}
</List>
</div>  )
}

export default Lists