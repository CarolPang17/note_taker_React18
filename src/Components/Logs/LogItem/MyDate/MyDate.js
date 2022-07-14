import React from 'react';
import './MyDate.css'

const MyDate = (props) => {

  console.log(props)
  return (
    <div className="date">
      <div className="month">{props.date.toLocaleString('en', {month:'short'})}</div>
      <div className="day">{props.date.getDate()}</div>
    </div>
  );
};

export default MyDate;
