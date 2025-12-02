import heroImage1 from "../../../assets/image1.jpeg";
import heroImage2 from "../../../assets/image2.jpg";
import heroImage3 from "../../../assets/image3.jpg";
import heroImage4 from "../../../assets/image4.jpg";

function IntroSection() {
  return (
    <section className="intro" aria-label="Hero section with main message">
      <div className="intro-overlay" />
      <div className="intro-content">
        <h1>
          <span>Furniture</span> Solutions. Affordable Prices.
        </h1>
        <p>
          Discover modern furniture that blends comfort, craftsmanship, and
          modern design. Our pieces elevate your home or workspace into a
          beautifully built, sustainable, and stylish environment.
        </p>
        <div className="intro-actions">
          <button type="button" className="btn btn-primary">
            Explore More
          </button>
          <button type="button" className="btn btn-secondary">
            Request Quote
          </button>
        </div>
      </div>

      {/* Preload background images to avoid flashes */}
      <div className="intro-preload" aria-hidden="true">
        <img src={heroImage1} alt="" loading="lazy" />
        <img src={heroImage2} alt="" loading="lazy" />
        <img src={heroImage3} alt="" loading="lazy" />
        <img src={heroImage4} alt="" loading="lazy" />
      </div>
    </section>
  );
}

export default IntroSection;