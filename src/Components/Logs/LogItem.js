import React from 'react';

const LogItem = () => {
  return (    
  <div>
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>
   {/* content of each log */}
      <div className="content">
        <h2 className="desc"> Learning Reach </h2>
        <div className="time"> 40 mins </div>
      </div>
    </div>)

};

export default LogItem;
