import MainNews from "../components/MainNews";
import Navigation from "../components/Navigation";
import "./ListPage.css";

const ListPage = () => {
  

  return (
    <section className="list-page-section">
      <Navigation/>
      <MainNews/>
    </section>
  );
};

export default ListPage;
