import ReactDOM from 'react-dom/client';

//import the stylesheet
import './index.css';

//create a react element
const App = (
  <div className="logs">
    {/*div of each logs*/}
    <div className="item">
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>
      {/* content of each log */}
      <div className="content">
        <h2 className="desc"> Learning Reach </h2>
        <div className="time"> 40 mins </div>
      </div>
    </div>

{/* item 2 */}
    <div className="item">
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>
      {/* content of each log */}
      <div className="content">
        <h2 className="desc"> Learning Reach </h2>
        <div className="time"> 40 mins </div>
      </div>
    </div>

{/* item 2 end */}
  </div>
);

//get root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);
