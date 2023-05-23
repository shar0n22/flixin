import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root')); // ReactDOM has been depracted from react version 18
// this going to render to trigger the div inside the html file with an id of root and inject our entire app inside that div and then render it.
// const rootElement = createRoot(document.getElementById('root'))

// rootElement.render(<App />, document.getElementById('root'));
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)
createRoot(document.getElementById('root')).render(<App />)
