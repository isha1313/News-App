import React from 'react'

function NavBar(props){

    return (
      <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-secondary`} >
    <a className="navbar-brand" >NewsApp</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('general')}>Home</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('entertainment')}>Entertainment</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('business')}>Business</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('science')}>Science</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('sports')}>Sports</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('technology')}>Technology</button>
    </div>
  <div className="custom-control custom-checkbox">
    <button type="button" className="btn btn-secondary" onClick={()=>props.toggle('health')}>Health</button>
    </div>
  </nav>
  
      </>
    )
  }



export default NavBar;