import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const News=(props)=> {

  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const update=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
      let data=await fetch(url);
      let parsedata=await  data.json()
      setarticles(parsedata.articles)
      settotalResults(parsedata.totalResults)

  }

    useEffect( () => {
      update();
    }, [])

    const handlenext= async ()=>{
      setpage(page+1);
      update();
     }
     
     const handleprevious= async ()=>{
      setpage(page-1);
      update();
     }
    return (
      <div className="container my-3 ">
        <h2 className='text-center my-3'>Top-Headlines from {props.category}</h2>
        <div className='row my-2'>
        { articles.map((element)=>{
            return <div className='col-md-4 '  key ={element.url}> 
            <NewsItem title={element.title.slice(0,40)} author={element.author}  time ={element.publishedAt}description={element.description?element.description.slice(0,120):[]} imgUrl={element.urlToImage?element.urlToImage:"https://foreignpolicyblogs.com/wp-content/uploads/technology.jpg"} newsUrl={element.url} />
            </div>
        })}        
        </div>
        <div className='container d-flex justify-content-between'>
              <button className="btn btn-dark"  disabled={page<=1} type="button" onClick={handleprevious}>&larr; Previos</button>
              <button className="btn btn-dark"  disabled={page+1>Math.ceil(totalResults/9)} type="button" onClick={handlenext}>Next &rarr;</button>
        </div>
      </div>
    )
  
}

News.defaultProps={
  country:'in',
  pagesize:9,
  category:'general',
}

News.propTypes={
  country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
}

export default News