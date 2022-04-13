import data1 from "../data/data (1)";
import React, { useState } from "react";
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'

const Navigation = () => {
  const [numberNew, setNumbernews] = useState(0);

  const nextNew = () => {
    setNumbernews((oldNew) => {
      let nextNew = oldNew + 1;
      if (nextNew > data1.data.length - 1) {
        nextNew = 0;
      }
      return nextNew;
    });
  };
  const prevNew = () => {
    setNumbernews((oldNew) => {
      let nextNew = oldNew - 1;
      if (nextNew < 0) {
        nextNew = data1.data.length - 1;
      }
      return nextNew;
    });
  };

  return (
    <article className="leftovers">
      <button onClick={prevNew} className='nav-btns'><FaChevronLeft/></button>
      {data1.data.slice(6).map((news, i) => {
        return (
          <React.Fragment key={news.id}>
            {news.image.data && news.image.data.urls && (
              <div className={`${numberNew === i ? "active" : "article"}`}>
                <img src={news.image.data.urls.uploaded.original} alt="news" />
                <div className="small-title">
                  <h5>{news.title}</h5>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
      <button onClick={nextNew} className='nav-btns'><FaChevronRight/></button>
    </article>
  );
};
export default Navigation;
