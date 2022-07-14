import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  return (
    <Card>
      <form >
        <div>
          <label htmlFor="date">Date?</label>
              <input id="date" type="date"/>    
        </div>
        <div>
          <label htmlFor="desc">What you going to do?</label>
              <input id="desc" type="text"/>    
        </div>
        <div>
          <label htmlFor="time">How long does it takes?</label>
              <input id="time" type="number"/>    
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;