
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { Route, Routes } from 'react-router-dom';


function App() {


  const [mode, setMode] = useState('light')   //whether it has default mode
  const [alert, setAlert] = useState(null)  //to set alert 
  // function to change the mode  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Enabled Dark mode", "success ! ");
    }
    else {
      setMode('white');
      document.body.style.background = 'white';
      showAlert("Enabled light mode", "success ! ");

    }
  }
  //function to set alert 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  return (
    <>
      {/* Navbar  */}
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* alert  */}
      <Alert alert={alert} />
      
        {/* to deploy on github page we need to comment the router related process
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text To Analyze." mode={mode} />} />
            <Route path='about' element={<About/>}/>
          </Routes>
        */}
        
      

       
     {/* Textform  */}
      <div className="container my-3">
        <TextForm showAlert={showAlert}  heading="Enter the Text To Analyze." mode={mode} />
      </div>

       {/* about us 
      <About/>   */}

    </>
  );
}

export default App;
