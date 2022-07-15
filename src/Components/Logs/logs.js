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
        //<LogItem date={logsData[0].date} desc={logsData[0].desc} time={logsData[0].time}/>
        //<LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />
        logItemData
        // logsData.map(item => <LogItem {...item}/>)
      }
    </Card>

};

export default Logs;
