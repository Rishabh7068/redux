import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../State/index";

const Shop = () => {
  const dispact = useDispatch();
  const [amount, setamount] = useState(0);
  const { depositMoney, withrawMoney } = bindActionCreators(
    actionCreators,
    dispact
  );
  const handlede = () => {
    const x = parseInt(amount);
    depositMoney(x);
    setamount(0);
  };
  const handlewi = () => {
    const x = parseInt(amount);
    withrawMoney(x);
    setamount(0);
  };

  return (
    <div className="container">
      <h1>Deposite/Withraw Money</h1>
      <input
        type="number"
        name="number"
        id="number"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <button className="btn btn-primary mx-3" onClick={handlede}>
        {" "}
        Deposite
      </button>
      <button className="btn btn-primary" onClick={handlewi}>
        Withraw
      </button>
    </div>
  );
};

export default Shop;
