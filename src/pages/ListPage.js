import React, { useState } from "react";
import data1 from "../data/data (1)";
import "./ListPage.css";

const ListPage = () => {
  const [news, setNews] = useState(0);

  const displayNews = (index) => {
    setNews(index);
  };

  return (
    <section className="list-page-section">
      <article className="leftovers">
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
      <div className="main-news">
        <div className="main">
          <img
            src={data1.data[news].image.data.urls.uploaded.original}
            className="main-img"
            alt="first-img"
          />
          <div className="title">
            <h3>{data1.data[news].title}</h3>
          </div>
        </div>
        <ul className="news-container">
          {data1.data.slice(0, 5).map((news, i) => {
            return (
              <li className="news" onMouseOver={() => displayNews(i)} key={i}>
                {news.image.data && news.image.data.urls && (
                  <img
                    src={news.image.data.urls.uploaded.original}
                    className="secondary-img"
                    alt="img"
                  />
                )}
              </li>
            );
          })}
        </ul>
        {/* <ul className="news-container">
          {data1.data.map((news, i) => {
              console.log(news[0])
            return (
              <React.Fragment>
                <div className="main">
                  {news[0].image && news[0].image.data && news[0].image.data.urls && <img src={news[0].image.data.urls.uploaded.original} alt="main-news" />}
                  <div>{news[0].title}</div>
                </div>
                <li>
                {news[i+1].image.data && news[i+1].image.data.urls && <img src={news[i+1].image.data.urls.uploaded.original} alt="main-news" />}
                  <div>title</div>
                </li>
              </React.Fragment>
            );
          })}
        </ul> */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ListPage;
