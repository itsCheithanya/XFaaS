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
  // <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/wf" element={<Wf/>}/>
        <Route path="/wf/CodeViewer" element={<CodeViewer/>} />
        <Route path="/wf/InvocationsPage" element={<InvocationsPage/>} />

        
      </Routes>
    </Router>

  //</React.StrictMode>
);

reportWebVitals();
