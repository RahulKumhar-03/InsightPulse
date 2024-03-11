import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalLize = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(()=>{
   document.title = `${capitalLize(props.category)} - NewsMonkey`;
   updateNews();
  },[])
 
 const fetchMoreData = async () =>{
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=800c9ac524d74a0dbcf9d36d6d838fe2&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1)
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)

 }

    return (
       <>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalLize(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}>
          <div className="container">
        <div className="row">
        {articles.map((article) => {
             return <div className="col-md-4" key={article.url}>
             <NewsItem
              title={article.title?article.title.slice(0,45):""} 
              description={article.description?article.description.slice(0,88):""} 
              imageUrl={article.urlToImage} 
              author={article.author}
              date={article.publishedAt}
              newsUrl={article.url}
              source={article.source.name}
             />
           </div>
        })} 
        </div>
        </div> 
        </InfiniteScroll>
        </>
    );
  }

News.defaultProps ={
  pageSize: 6,
  country: 'in',
  category: 'general'
}
News.propsTypes = {
  pageSize: PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string
}
export default News
