import "./App.css";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2022, 1, 14),
    },
    {
      id: "e2",
      title: "Life Insurance",
      amount: 2234.98,
      date: new Date(2022, 0, 27),
    },
    {
      id: "e1",
      title: "Credit Card",
      amount: 2500,
      date: new Date(2025, 2, 31),
    },
  ];
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
