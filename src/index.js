import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const WordBox =()=>{
  return <div className='wordBox'><input type="text" /></div>
}

const SearchButton =()=>{
  return <div className='btn'><button className='btn1' type="submit">Google Search</button> <button className='btn2' type="submit">I'm Feeling Lucky</button></div>
}

const LanguageNote =(props)=>{
  return <h4 className='lang'>Google offered in: <span>{props.title}</span></h4>
}
root.render(
  <React.StrictMode>
    <App />
    <WordBox />
    <SearchButton />
    <LanguageNote title="English  हिन्दी"/>
  </React.StrictMode>
);


