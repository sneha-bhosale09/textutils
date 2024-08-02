import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Navbar(props) {
  return (
  
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-white `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"  className="nav-link active" aria-current="page">Home</Link>
          {/* <a href="#"  className="nav-link active" aria-current="page">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
       {/* primary color mode  */}
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      </div>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
    </div>
    <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeGreen}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
    </div>
    <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeRed}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'red':'light'} mode</label>
    </div> */}
    </div>
  </div>
</nav>

  )
}

export default Navbar
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // aboutText: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "sneha",
  // aboutText: "hello"
};