import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {

  let inputDate = '';
  let inputDesc = '';
  let inputTime = 0;

  const dateChangeHandler = (e) => {
    inputDate = e.target.value
  };

  const descChangeHandler = (e) => {
    inputDesc = e.target.value
  };

  const timeChangeHandler = (e) => {
    inputTime = e.target.value
  };


  const formSubitHandler = (e) => {
    e.preventDefault();

    const newLog = {
      date : new Date(inputDate),
      desc : inputDesc,
      time : inputTime
    }

    console.log(newLog);
  }

  return (
    <Card className="logs-form">
      <form onSubmit={formSubitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date?</label>
          <input onChange={dateChangeHandler} id="date" type="date" />
        </div>
        <div className="form-item">
          <label htmlFor="desc">What you going to do?</label>
          <input onChange={descChangeHandler} id="desc" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="time">How long does it takes?</label>
          <input onChange={timeChangeHandler} id="time" type="number" />
        </div>
        <div className="form-btn">
          <button> ADD </button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
