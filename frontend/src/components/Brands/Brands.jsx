import image1 from "../../assets/image1.jpeg";

import "./Brands.css";

function Brands() {
  return (
    <section className="brands">
      <h2>Top Featured Brands.</h2>

      <div className="brand-cards">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="brand-card" key={i}>
            <img src={image1} alt="Brand Placeholder" />
            <p className="brand-title">Brand Name</p>
            <p className="brand-offer">10–60% OFF</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
