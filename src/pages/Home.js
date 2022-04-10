import { Link } from "react-router-dom";
import './Home.css'



const Home = () => {
    return <section className="home">
        <div>
            <Link to='/articles' className="link">Go to List Page</Link>
            <span>/</span>
            <Link to='/article/1' className="link">Go to Article Page</Link>
        </div>
    </section>
}
export default Home;