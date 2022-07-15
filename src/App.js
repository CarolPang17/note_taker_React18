import React from 'react';
import Logs from './Components/Logs/logs';
import LogsForm from './Components/LogsForm/LogsForm';
import './App.css'



const App = () => {

  const logsData = [
    {
      id: '001',
      date: new Date(2021, 9, 21, 19, 0),
      desc: 'learn frontend',
      time: 50,
    },
    {
      id: '002',
      date: new Date(2023, 7, 9, 10, 10),
      desc: 'clear litter',
      time: 80,
    },
    {
      id: '003',
      date: new Date(2000, 5, 15, 1, 50),
      desc: 'cook pizza',
      time: 130,
    },
    {
      id: '004',
      date: new Date(2015, 8, 13, 50, 35),
      desc: 'try new clothes',
      time: 95,
    },
  ];

  const saveLogJandler = (newLog) => {
    console.log(newLog);
  }

  return (
    <div className='app'>
      <LogsForm onSaveLog={saveLogJandler} />
      <Logs logsData={logsData} />
    </div>
  );
};

export default App;
