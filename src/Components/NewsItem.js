import React from 'react'


const NewsItem =(props)=> {

    let {title,description,imgUrl,newsUrl,author,time}=props;
    return (
      <div  className='my-3'><div className="card" >
      <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(time).toGMTString()}</small></p>
        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-info">Read More</a>
      </div>
    </div>
    </div>
    )
  
}



export default NewsItem