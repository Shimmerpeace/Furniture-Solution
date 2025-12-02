import image7 from "../../../assets/image7.jpeg";

function NewsSection() {
return (
<section className="news-section">
<h2 className="title">News and Updates</h2>
<div className="news-grid">
<article className="large-article">
<img src={image7} alt="Living room furniture" className="large-img" loading="lazy" />
<div className="large-content">
<span className="tag">January 3, 2025</span>
<h3 className="large-heading">
The Art of Choosing Furniture That Complements Your Space
</h3>
<p className="large-text">
Discover how to select modern furniture that blends harmoniously with your home.
</p>
</div>
</article>


    <div className="side-column">
      <article className="small-article">
        <img src={image7} alt="Sustainable furniture" className="small-img" loading="lazy" />
        <div className="small-content">
          <span className="tag small">On the blog</span>
          <h4 className="small-heading">
            Sustainable Materials: The Future of Furniture Design
          </h4>
          <p className="small-text">Read more</p>
        </div>
      </article>

      <article className="small-article">
        <img src={image7} alt="Minimalist living room" className="small-img" loading="lazy" />
        <div className="small-content">
          <span className="tag small">On the blog</span>
          <h4 className="small-heading">
            How Minimalist Design Can Transform Your Living Room
          </h4>
          <p className="small-text">Read more</p>
        </div>
      </article>
    </div>
  </div>
</section>
);
}

export default NewsSection;