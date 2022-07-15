import React from 'react';
import Card from '../UI/Card/Card';
import LogItem from './LogItem/LogItem';

import './Logs.css';

const Logs = (props) => {


  const logItemData = props.logsData.map((item, index) => (
    <LogItem logIndex={index} 
    onDelLog={() => props.onDelLog(index)} 
    key={item.id} 
    date={item.date} 
    desc={item.desc} 
    time={item.time} />
  ));

  return <Card className="logs">
      {
        logItemData.length !== 0 ? logItemData : <p className='no-logs'> There are no logs Data</p>
      }
    </Card>

};

export default Logs;
