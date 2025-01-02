import React from 'react'

const Transaction = ({name,description, credit, datetime, amount, id, transactions, setTransactions}) => {
    const debit = !credit;

    function deleteCurrentTransaction() {
        setTransactions(transactions.filter(transaction => transaction._id !== id));
        const url = process.env.REACT_APP_API_URL + '/deleteTransaction';
        fetch(url, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({id:id})
        })
        .then(response => response.json().then(json => console.log("Deleted transaction", json)))
    }

  return (
    <div>
        <div className="transaction mt-2 flex py-2 justify-between border-t-2 border-[#30313d] ">
          <div className="left w-[60%]">
              <div className="name text-lg">{name}</div>
              <div className="desc text-sm text-[#888]">{description}</div>
          </div>
          <div className="right w-[40%] text-right">
              <div className={(debit ? 'text-[#c11]' : 'text-[#1c1]') + " price text-right text-xl"}>{amount<0 && '-'} Rs {((amount < 0) ? amount*-1 : amount*1)}</div>
              <div className="date-time text-xs text-[#888]">{datetime}</div>
          </div>
      </div>
      <button className="bg-red-700 w-full py-0.5 rounded-md " onClick={deleteCurrentTransaction}>Remove Transaction</button>
    </div>
  )
}

export default Transaction