import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/views/public/PresentationPublic/index'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
