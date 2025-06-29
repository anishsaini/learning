import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import State from './components/hooks/usestate.jsx';
import Effect from './components/hooks/useeffect.jsx';
import Ref from './components/hooks/ref.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Ref/>
    // <Effect/>
    // <State/>
    // <App /> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
