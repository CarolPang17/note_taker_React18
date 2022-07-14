import React from 'react';
import LogItem from './LogItem/LogItem';

import './Logs.css'

const Logs = () => {
  return <div className="logs">
    <LogItem date={new Date(2021,10,21,19,0)} desc={"learn frontend"} time={"50"}/> 
    <LogItem date={new Date(2022,5,22,5,30)} desc={"Haha"} time={"60"}/> 

  </div>
}

export default Logs;