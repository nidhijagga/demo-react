function ExpenseItem() {
let expenseDate = new Date(2023, 5, 2);
let expenseTitle = "Groceries";
let expenseAmount = 3000;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">Date</div>
          <div className="col">Title</div>
          <div className="col">Amount</div>
        </div>
        <div className="row">
          <div className="col">{expenseDate.toISOString()}</div>
          <div className="col">{expenseTitle}</div>
          <div className="col">Rs.{expenseAmount}</div>
        </div>
      </div>
      
    </>
  );
}

export default ExpenseItem;
