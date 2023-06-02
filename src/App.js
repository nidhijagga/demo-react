import ExpenseItem from './components/ExpenseItem';
import expenseItems from './expenseItems.json';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="container">
      <div className="row">
          <div className="col"> <strong> Date </strong></div>
          <div className="col"><strong> Title </strong></div>
          <div className="col"><strong> Amount </strong></div>
        </div>
      </div>
      {
        expenseItems.expenses.map((exp)=>{
          return <ExpenseItem date={exp.date} title={exp.title} amount={exp.amount}/>
        })
      }
    </div>
  );
}

export default App;
