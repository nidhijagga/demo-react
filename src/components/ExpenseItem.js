function ExpenseItem(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">{props.date}</div>
          <div className="col">{props.title}</div>
          <div className="col">Rs.{props.amount}</div>
        </div>
      </div>
      
    </>
  );
}

export default ExpenseItem;
