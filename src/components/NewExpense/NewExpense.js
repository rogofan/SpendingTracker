import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* To že 'saveExpenseDataHandler' nemá závorky znamená, že se nevolá, ale
      pouze ukazeje na funkci. Pointer editig se dělá pomocí 'ExpenseForm' */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
