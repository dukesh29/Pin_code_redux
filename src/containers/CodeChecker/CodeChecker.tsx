import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {AddDigit, CheckCode, RemoveDigit, ResetAll, ResetCheck} from "./CodeCheckerSlice";

const CodeChecker = () => {

  const dispatch = useDispatch();
  const codeValue = useSelector((state: RootState) => state.CodeValidator.password);
  const checkValue = useSelector((state: RootState) => state.CodeValidator.accessGranted);
  const clicked = useSelector((state: RootState) => state.CodeValidator.clicked);

  const Text = checkValue ? "Access Granted" : "Access Denied!";
  const changeColor = checkValue ? {backgroundColor: "lightgreen"} : {backgroundColor: "red"};

  if (checkValue) {
    setTimeout(() => dispatch(ResetCheck()), 2000);
  }

  if (!checkValue && clicked) {
    setTimeout(() => dispatch(ResetCheck()), 2000);
  }


  return (
    <div className="box">
      <div className="display" style={clicked ? changeColor : {backgroundColor: "white"}}>
        {clicked ?
          <p style={{margin: 0, fontSize: "22px", fontWeight: "bold"}}>{Text}</p>
          : <h5>{codeValue}</h5>}
      </div>
      <div className="digits-block">
        <div className="digits">
          <button onClick={() => dispatch(AddDigit("7"))}>7</button>
          <button onClick={() => dispatch(AddDigit("8"))}>8</button>
          <button onClick={() => dispatch(AddDigit("9"))}>9</button>
          <button onClick={() => dispatch(AddDigit("4"))}>4</button>
          <button onClick={() => dispatch(AddDigit("5"))}>5</button>
          <button onClick={() => dispatch(AddDigit("6"))}>6</button>
          <button onClick={() => dispatch(AddDigit("1"))}>1</button>
          <button onClick={() => dispatch(AddDigit("2"))}>2</button>
          <button onClick={() => dispatch(AddDigit("3"))}>3</button>
          <button onClick={() => dispatch(RemoveDigit())}> {"<"} </button>
          <button onClick={() => dispatch(AddDigit("0"))}>0</button>
          <button onClick={() => dispatch(CheckCode())}>E</button>
        </div>
        <button className="resetBtn" onClick={() => dispatch(ResetAll())}>Reset</button>
      </div>
    </div>
  );
};

export default CodeChecker;