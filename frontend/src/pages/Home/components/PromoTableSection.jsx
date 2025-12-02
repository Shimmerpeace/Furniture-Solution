import image10 from "../../../assets/image10.jpeg";

function PromoTableSection() {
return (
<section className="promo-table-section">
<div className="promo-content">
<p className="small-title">Up to 50% off</p>
<h2 className="promo-title">
Host Perfect Meals


With Discounted


Tables
</h2>
<p className="promo-description">
Get the best-rated tables for your dining room with huge savings. Limited-time offer. Order yours today.
</p>
<button type="button" className="btn btn-primary">
Shop Now
</button>
</div>
<div className="promo-table-image">
<img src={image10} alt="Dining table set on promotion" loading="lazy" />
</div>
</section>
);
}

export default PromoTableSection;