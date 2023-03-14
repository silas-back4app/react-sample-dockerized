import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Square from './Square';
import {useState} from 'react';
import React from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  console.log('hello world');
  return (
    <div 
   
    >
      <Square colorValue={colorValue}/>
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
      
    </div>
   
  );
}

export default App;
