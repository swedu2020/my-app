import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListExample from './ListExample';
import ScrollSpy from './ScrollSpy';
import Counter3 from './Counter3';
import Input from './Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Input name='id' label='ID : '
      onChange={(len)=>((len >= 5) ? true : false)}  /><br></br>
    <Input name='pw' label='PW : ' type='password'/><br></br>
    <Input name='eamil' label='EMAIL : ' type='email'/><br></br>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
