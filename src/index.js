import ReactDOM from 'react-dom/client';

//create a react element
const App = (
  <div className="logs">
    {/*div of each logs*/}
    <div className="item"></div>
    <div className="date"></div>
    <div className="month">April</div>
    <div className="day">19</div>
    {/* content of each log */}
    <div className='content'>
      <h2 className='desc'> Learning Reach </h2>
      <div className='time'> 40 mins </div>
    </div>
  </div>
);

//get root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);
