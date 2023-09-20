
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [myStyle, setmyStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '20px'
  });
  const [themebtn, setThemeBtn] = useState('Enable Dark Mode');
  const [showAlert, setshowAlert] = useState('');
  const changethemode = event => {
    if (myStyle.color === 'white') {
      setmyStyle({
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '20px'
      });
      setThemeBtn('Enable Dark Mode');
      document.body.style.backgroundColor = "white"
      setshowAlert('Light Mode Enabled');
      setTimeout(() => {
        setshowAlert('');
      }, 1500);
    } else {
      setmyStyle({
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px'
      });
      setThemeBtn('Enable Light Mode');
      document.body.style.backgroundColor = "black"
      setshowAlert('Dark Mode Enabled');
      setTimeout(() => {
        setshowAlert('');
      }, 1500);
    }
    event.preventDefault();
  }


  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={showAlert} />
      <TextForm myStyle={myStyle} changeMode={changethemode} themeBtn={themebtn} />
    </>
  );
}

export default App;
