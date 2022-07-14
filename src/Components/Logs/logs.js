import React from 'react';
import LogItem from './LogItem/LogItem';

import './Logs.css'

const Logs = () => {
    const logsData = [
      {
        date: new Date(2021,9,21,19,0),
        desc: "learn frontend",
        time: 50
      },
      {
        date: new Date(2023,7,9,10,10),
        desc: "clear litter",
        time: 80
      },
      {
        date: new Date(2000,5,15,1,50),
        desc: "cook pizza",
        time: 130
      },
      {
        date: new Date(2015,8,13,50,35),
        desc: "try new clothes",
        time: 95
      }
    ]
  return <div className="logs">
    {
      //<LogItem date={logsData[0].date} desc={logsData[0].desc} time={logsData[0].time}/>
      //logsData.map(item => <LogItem date={item.date} desc={item.desc} time={item.time}/>)
      
      logsData.map(item => <LogItem {...item}/>)
    }

  </div>
}

export default Logs;