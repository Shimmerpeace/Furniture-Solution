import image1 from "../../assets/image1.jpeg";
import "./News.css";

function News() {
  return (
    <section className="news">
      <h2>News & Updates</h2>

      <div className="news-list">
        <div className="news-item">
          <img src={image1} alt="News" />
          <div>
            <h3>The Art of Choosing Furniture</h3>
            <p>A short description of the blog topic...</p>
          </div>
        </div>

        <div className="news-item">
          <img src={image1} alt="News" />
          <div>
            <h3>How Minimalism Can Improve Design</h3>
            <p>Another description...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
