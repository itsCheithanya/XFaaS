import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wf from './components/Wf';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeViewer from './components/CodeViewer';
import InvocationsPage from './InvocationsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/wf" element={<Wf/>}/>
        <Route path="/wf/CodeViewer" element={<CodeViewer/>} />
        <Route path="/wf/InvocationsPage" element={<InvocationsPage/>} />

        
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
