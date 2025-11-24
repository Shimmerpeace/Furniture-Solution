import image1 from "../../assets/image1.jpeg";
import "./Deals.css";

function Deals() {
  return (
    <section className="deals">
      <h2>This Week's Best Furniture Deals.</h2>

      <div className="deal-cards">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="deal-card" key={i}>
            <div className="deal-img">
              <img
                src={image1}
                alt="Furniture Placeholder"
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

export default Deals;
