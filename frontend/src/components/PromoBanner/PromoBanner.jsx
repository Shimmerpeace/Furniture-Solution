import image1 from "../../assets/image1.jpeg";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo">
      <div className="promo-text">
        <p>GET 20% OFF</p>
        <h2>Host Perfect Meals With Discounted Tables.</h2>
        <button>Explore Now</button>
      </div>
      <img src={image1} alt="Promo" className="promo-img" />
    </section>
  );
}

export default PromoBanner;
