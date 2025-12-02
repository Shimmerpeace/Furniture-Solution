import image12 from "../../../assets/image12.jpeg";
import image13 from "../../../assets/image13.jpeg";
import image14 from "../../../assets/image14.jpeg";
import image15 from "../../../assets/image15.jpeg";
import image16 from "../../../assets/image16.jpeg";

const featured = [
{ id: 1, name: "Black Side Table", price: "$100", img: image12 },
{ id: 2, name: "Wood Storage Unit", price: "$100", img: image13 },
{ id: 3, name: "White Shelf Cube", price: "$100", img: image14 },
{ id: 4, name: "Metal Work Desk", price: "$100", img: image15 },
{ id: 5, name: "Modern Grey Sofa", price: "$100", img: image16 },
];

function FeaturedSection() {
return (
<section className="featured-section" aria-label="Featured products">
<h2>Featured Products</h2>
<div className="featured-carousel" role="region" aria-label="Featured products carousel">
<button type="button" className="carousel-btn" aria-label="Previous featured product">
 &lt;
</button>
<div className="featured-list" aria-live="polite">
{featured.map((item) => (
<article key={item.id} className="featured-card" tabIndex={0}>
<img src={item.img} alt={item.name} className="featured-img" loading="lazy" />
<p className="featured-name">{item.name}</p>
<p className="featured-price">{item.price}</p>
</article>
))}
</div>
<button type="button" className="carousel-btn" aria-label="Next featured product">
 &gt;
</button>
</div>
</section>
);
}

export default FeaturedSection;