import { useEffect, useState } from 'react';
import data from '../data/data';
import './ArticlePage.css'

const ArticlePage = () => {
    const [article,setArticle] = useState([])
    useEffect(() => {
        const newArr = data.data.body.splice(2,1)
        setArticle(data.data.body);
    },[])
    return <section className='article-section'>
        <div className='container'>
            <h1>{data.data.title}</h1>
            <h3>{data.data.subtitle}</h3>
            <img src={data.data.image.data.urls.uploaded.original} alt='img'/>
            <div>
                {article.map((content,i) => {
                    let temp = content.data.content.split("<p>")[1].split("</p>")[0].split("<strong>")[0].split("<br>");
                    
                    return <p key={i}>{temp[0]}</p>
                })}
            </div>
        </div>
    </section>
}
export default ArticlePage;