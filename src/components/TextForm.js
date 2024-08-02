import React, { useState } from 'react'

function TextForm(props) {

  const [text, setText] = useState('')
  
  const handleUpclick =()=>{
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }

  const handleLowclick =()=>{
    let newText = text.toLowerCase() ;
    setText(newText);
    props.showAlert("converted to Lower case","success")

  }
  const handleClearclick =()=>{
    
    setText('')
    props.showAlert("text box cleared","success")

  }
 
  const handleOnChange =(e)=>{
    setText(e.target.value)
  }
  
  const handleCopy =()=>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("text copied to clipboard","success")

  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra spaces","success")

  }
  // const capitalize=(text)=>{
  //   let sText = text.split(" ")
  //   const newText = sText.toLowerCase();
  //   setText(newText.charAt(0).toUpperCase() + newText.slice(1) )
  // }
  return (
    <>
    <div className='container'>
      <h1 className='mb-4' style={{color:props.mode==='light'?'#022c3c':'white'}}>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='light'?'#022c3c':props.mode}} ></textarea>
      </div>
      <button disabled={text.length ===0} className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-1 my-1`} style={{border:'2px solid black'}} onClick={handleUpclick}>Convert to uppercase</button>
      <button disabled={text.length ===0}  className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-1 my-1`} style={{border:'2px solid black'}} onClick={handleLowclick}>Convert to Lowercase</button>
      <button disabled={text.length ===0} className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-1 my-1`} style={{border:'2px solid black'}} onClick={handleClearclick}>Clear Text</button>
      
      <button disabled={text.length ===0} className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-1 my-1`} style={{border:'2px solid black'}} onClick={handleCopy}>Copy text</button>
      <button disabled={text.length ===0} className={`btn btn-${props.mode==='light'?"primary":props.mode} mx-1 my-1`} style={{border:'2px solid black'}} onClick={handleExtraSpaces}>remove Extra spaces</button>
      {/* <button className='btn btn-primary mx-1 my-1' onClick={capitalize}>1st letter capital</button> */}
    </div>

    <div className="container my-3" style={{color:props.mode==='light'?'#022c3c':'white'}}>
      <h1>Your text summary here</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )   
}

export default TextForm