import React from 'react';
import MyDate from './MyDate/MyDate';
import './LogItem.css'

const LogItem = (props) => {
  console.log(props.date)

  return (    
  <div className='item'>
   <MyDate date={props.date}/>
   {/* content of each log */}
      <div className="content">
        <h2 className="desc"> {props.desc} </h2>
        <div className="time"> {props.time}</div>
      </div>
    </div>)

};

export default LogItem;
