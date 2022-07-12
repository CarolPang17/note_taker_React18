import ReactDOM from 'react-dom/client';

//create a react element
const App = <div> Hello React !! </div>

//get root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);