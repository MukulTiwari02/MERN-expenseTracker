import { useState, useEffect } from "react";
import Transaction from "./components/Transaction";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((transactions) => {
      console.log(transactions)
      setTransactions(transactions)
    })
  },[])

  async function getTransactions()
  {
    const url = process.env.REACT_APP_API_URL + '/transactions'
    console.log(url);
    const res = await fetch(url);
    return await res.json();
  }

  
  function addNewTransaction(event){
    event.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name?.split(' ')[0];
    let newTransactionId;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:name.substring(price.length+1),price,description,dateTime})
    })
    .then(response => response.json().then(json => console.log("result", json)))
    .then(() => {
      const previousTransactions = transactions;
      setTransactions(() => {
        const newTransaction = {
          name : name.substring(price.length+1),
          price : price,
          description,
          dateTime,
          _id: newTransactionId
        }
        return [...previousTransactions, newTransaction]
      })
    });
    setName("");
    setDescription("");
    setDateTime("");
  }

  let price = 0;
  transactions.forEach(element => {
    price = eval(price + parseFloat(element.price));
  });
  
  price = parseFloat(price).toFixed(2);
  let fractionPrice = price.toString().split('.')[1];
  price = price.toString().split('.')[0];
  price = parseFloat(price)


  return (
    <main className="max-w-[400px] mt-16 mx-auto">
      <h1 className="text-center text-white text-5xl font-semibold">{price<0 && '-'} Rs {((price<0) ? (price*-1).toLocaleString('en-IN') : (price*1).toLocaleString('en-IN'))}<span className="text-xl">.{fractionPrice}</span></h1>
      <form className="mt-10 w-full" onSubmit={addNewTransaction}>
        <div className="basics flex gap-2 w-full">
          <input onChange={(e) => setName(e.target.value)} value={name} className="px-2 py-2 rounded-sm border-2 text-white bg-transparent border-[#30313d] w-[50%]" type="text" name="" id="" placeholder="+200 new Samsung TV"/>
          <input onChange={(e) => setDateTime(e.target.value)} value={dateTime} className="px-2 py-2 rounded-sm border-2 text-[#9999a7] bg-transparent border-[#30313d] w-[50%]" type="datetime-local" name="" id="" />
        </div>
        <div className="description mt-2">
          <input onChange={(e) => setDescription(e.target.value)} value={description} className="px-2 py-2 rounded-sm border-2 text-white bg-transparent border-[#30313d] w-full" type="text" placeholder="Description"/>
        </div>
        <button className="w-full mt-2 rounded-md bg-[#ddd] text-black p-2" type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        {transactions?.map((transaction) => {
          return <Transaction transactions={transactions} setTransactions={setTransactions} id={transaction._id} name={transaction.name} credit={transaction.price>=0} description={transaction.description} amount={transaction.price} datetime={transaction.dateTime}/>
        })}    
      </div>
    </main>
  );
}

export default App;
