import data1 from "../data/data (1)";
import React from "react";


const Navigation = () => {
    return <article className="leftovers">
    {data1.data.slice(6).map((news, i) => {
      return (
        <React.Fragment>
          {news.image.data && news.image.data.urls && (
            <div className="article">
              <img
                src={news.image.data.urls.uploaded.original}
                alt="news"
              />
              <div className="small-title">
                <h5>{news.title}</h5>
              </div>
            </div>
          )}
        </React.Fragment>
      );
    })}
  </article>
}
export default Navigation;