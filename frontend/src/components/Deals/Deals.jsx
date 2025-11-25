import image1 from "../../assets/image1.jpeg";
import "./Deals.css";

export default function Deals() {
  return (
    <section className="deals" aria-label="Current furniture deals">
      <h2>This Week's Best Furniture Deals.</h2>

      <div className="deal-cards">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="deal-card" key={i} tabIndex="0">
            <div className="deal-img">
              <img
                src={image1}
                alt="Furniture deal item"
              />
            </div>
            <p className="deal-name">Product Name</p>
            <p className="deal-price">$199 — $399</p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
