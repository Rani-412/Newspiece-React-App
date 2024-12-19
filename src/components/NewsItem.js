import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imgurl, url, author, date, source } = props;
    return (
      <div className="container my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imgurl
                ? "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1023%2Fr1404463_1296x729_16%2D9.jpg"
                : imgurl
            }
            alt={title}
          />
          <div className="card-body">
            {/*<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex :'1'}}>
    {source}
    
  </span>*/}
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
