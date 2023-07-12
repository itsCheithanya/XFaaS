import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wf from './components/Wf';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeViewer from './components/CodeViewer';
import InvocationsPage from './InvocationsPage';
import Invocation from './scenes/invocations/Invocation';
import Login from './scenes/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/workflows" element={<App/>} />
        <Route path="/wf" element={<Wf/>}/>
        <Route path="/wf/CodeViewer" element={<CodeViewer/>} />
        <Route path="/wf/deployment" element={<InvocationsPage/>} />
        <Route path="/wf/deployment/invocations" element={<Invocation/>} />

        
      </Routes>
    </Router>


);

reportWebVitals();
