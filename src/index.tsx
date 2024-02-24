import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './app/App';

import './index.css'; import './fonts.css';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render( <BrowserRouter> <App /> </BrowserRouter> );

reportWebVitals(console.log);
