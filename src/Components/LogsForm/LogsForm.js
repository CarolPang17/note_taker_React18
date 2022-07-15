import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  
  const dateChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const descChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const timeChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <Card className="logs-form">
      <form>
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
