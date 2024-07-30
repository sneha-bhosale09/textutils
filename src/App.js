import React,{useState} from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
// import {BrowserRouter,  Route,  Routes} from 'react-router-dom'

function App() {
  const [Mode, setMode] = useState('light') ;
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ="#022c3c";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils- Dark Mode"
//automatically present text on title bar in paticular set of interval of time
      // setInterval(()=>{
      // document.title="TextUtils- Dark Mode"

      // },2000)
      
      // setInterval(()=>{
      //   document.title="install TextUtils"
  
      //   },1500)

    }else {
      setMode('light')
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils- Light Mode"

    }
  }
  const changeGreen=()=>{
    if(Mode==='light'){

      setMode('green');
      document.body.style.backgroundColor ='green';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='yellow';

    }
  }
  const changeRed=()=>{
    if(Mode==='light'){

      setMode('red');
      document.body.style.backgroundColor ='#b5082a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='pink';

    }
  }
  return (
    <>
    {/* <BrowserRouter> */}

    <Navbar title="textutils" aboutText="aboutTextUtils" mode={Mode} toggleMode ={toggleMode} changeGreen ={changeGreen} changeRed={changeRed} />
    <Alert alert={alert}/>
    <div className="container my-3">

    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />

    {/* <Routes> */}
      {/* <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />}></Route> */}
      {/* <Route path='/about' element={<About/>}/> */}
    {/* </Routes> */}

    {/* <About/> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App