import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import State from './components/hooks/usestate.jsx';
import Effect from './components/hooks/useeffect.jsx';
import Ref from './components/hooks/ref.jsx';
import Memo from './components/hooks/usememo.jsx';
import Callback from './components/hooks/usecallback.jsx';
import Contex from './components/hooks/usecontext.jsx';
import Calling from './api/calling.jsx';
import Card from './components/modules/card.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Card />
    // <Calling/>
    // <Callback/>
    // <Memo/>
    // <Ref/>
    // <Effect/>
    // <State/>
    // <Contex>
    //   <App />
    // </Contex>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();