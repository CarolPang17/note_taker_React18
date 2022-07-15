import React, { useEffect, useState } from "react";
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = (props) => {


  const [inputDate, setInputDate] = useState('');
  const [inputDesc, setinputDesc] = useState('');
  const [inputTime, setInputTime] = useState('');

  // const [formData, setFormData] = useState({
  //   inputDate: '',
  //   inputDesc: '',
  //   inputTime: ''
  // })
  
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // setFormData({
    //       ...formData,
    //       inputDate: e.target.value
    // })

  };

  const descChangeHandler = (e) => {
    setinputDesc(e.target.value);
    // setFormData({
    //   ...formData,
    //   inputDesc: e.target.value
    // })
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
    // setFormData({
    //   ...formData,
    //   inputTime: e.target.value
    // })
  };


  const formSubitHandler = (e) => {

    e.preventDefault();

    // const newLog = {
    //   date : new Date(formData.inputDate),
    //   desc : formData.inputDesc,
    //   time : +formData.inputTime
    // }

    const newLog = {
      date : new Date(inputDate),
      desc : inputDesc,
      time : +inputTime
    }

    props.onSaveLog(newLog);

    setInputDate('');
    setinputDesc('');
    setInputTime('');

    // setFormData({
    //   inputDate: '',
    //   inputDesc: '',
    //   inputTime: ''
    // })

  }

  return (
    <Card className="logs-form">
      <form onSubmit={formSubitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date?</label>
          <input onChange={dateChangeHandler} value={inputDate} id="date" type="date" />
        </div>
        <div className="form-item">
          <label htmlFor="desc">What you going to do?</label>
          <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="time">How long does it takes?</label>
          <input onChange={timeChangeHandler} value={inputTime} id="time" type="number" />
        </div>
        <div className="form-btn">
          <button> ADD </button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;

