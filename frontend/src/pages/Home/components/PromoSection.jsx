import promoImage from "../../../assets/image1.jpeg";

function PromoSection() {
return (
<section className="promo-section">
<div className="promo-text">
<p className="promo-tag">Up to 30% off</p>
<h2 className="promo-title">
Perfect Cabinets For Your Living Room
</h2>
<p className="promo-desc">
Get the perfect cabinet design for your living room. Shop amazing limited-time offers.
</p>
<button type="button" className="btn btn-primary">
Shop Now
</button>
</div>
<img src={promoImage} alt="Cabinet in a modern living room" className="promo-img" loading="lazy" />
</section>
);
}

export default PromoSection;