import React from 'react'

const NewsItem = (props) =>{

    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', position:'absolute', right:'0', justifyContent:'flex-end'}}>
            <span className='badge rounded-pill bg-dark'>{source}</span>
         </div>
        <img src={!imageUrl?"https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    </div>
    )
  }

export default NewsItem
