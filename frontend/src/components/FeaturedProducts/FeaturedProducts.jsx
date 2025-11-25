import image12 from "../../assets/image12.jpeg";
import image13 from "../../assets/image13.jpeg";
import image14 from "../../assets/image14.jpeg";
import image15 from "../../assets/image15.jpeg";
import image16 from "../../assets/image16.jpeg";

import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const featured = [
    { name: "Black Side Table", price: "$100", img: image12 },
    { name: "Wood Storage Unit", price: "$100", img: image13 },
    { name: "White Shelf Cube", price: "$100", img: image14 },
    { name: "Metal Work Desk", price: "$100", img: image15 },
    { name: "Modern Grey Sofa", price: "$100", img: image16 },
  ];

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="featured-carousel" role="region" aria-label="Featured products carousel">
        <button className="carousel-btn" aria-label="Previous featured product">&lt;</button>
        <div className="featured-list">
          {featured.map((item, index) => (
            <div className="featured-card" key={index} tabIndex="0">
              <img src={item.img} alt={item.name} className="featured-img" />
              <p className="featured-name">{item.name}</p>
              <p className="featured-price">{item.price}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn" aria-label="Next featured product">&gt;</button>
      </div>
    </section>
  );
}

