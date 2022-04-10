import { useState } from "react";
import data1 from "../data/data (1)";


const MainNews = () => {
    const [news, setNews] = useState(0);

  const displayNews = (index) => {
    setNews(index);
  };
    return <div className="main-news">
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
  </div>
}

export default MainNews;