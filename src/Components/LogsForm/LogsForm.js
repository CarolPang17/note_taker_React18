import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  return (
    <Card className="logs-form">
      <form >
        <div className='form-item'>
          <label htmlFor="date">Date?</label>
              <input id="date" type="date"/>    
        </div>
        <div className='form-item'>
          <label htmlFor="desc">What you going to do?</label>
              <input id="desc" type="text"/>    
        </div>
        <div className='form-item'>
          <label htmlFor="time">How long does it takes?</label>
              <input id="time" type="number"/>    
        </div>
        <div className='form-btn'>
          <button> ADD </button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;