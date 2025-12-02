import image7 from "../../../assets/image7.jpeg";
import image14 from "../../../assets/image14.jpeg";
import image15 from "../../../assets/image15.jpeg";
import image16 from "../../../assets/image16.jpeg";

const deals = [
{
id: 1,
title: "PÄLLKRAG Side Table Black",
rating: 4.7,
reviews: 120,
price: "$249",
img: image7,
},
{
id: 2,
title: "Outdoor Bench Modern",
rating: 4.1,
reviews: 88,
price: "$480",
img: image14,
},
{
id: 3,
title: "Nordic Style Round Table",
rating: 4.6,
reviews: 102,
price: "$399",
img: image15,
},
{
id: 4,
title: "Modern Grey Sofa",
rating: 4.8,
reviews: 212,
price: "$599 – $865",
img: image16,
},
{
id: 5,
title: "Light Grey Ottoman",
rating: 4.4,
reviews: 64,
price: "$179 – $259",
img: image16,
},
];

function DealsSection() {
return (
<section className="deals-section">
<div className="header-row">
<h2>This Week’s Best Furniture Deals</h2>
<div className="arrows">
<button type="button" aria-label="Previous deal">
{"<"}
</button>
<button type="button" aria-label="Next deal">
{">"}
</button>
</div>
</div>
<div className="products-row">
{deals.map((item) => (
<article key={item.id} className="furniture-product-card">
<img src={item.img} alt={item.title} className="product-img" loading="lazy" />
<div className="product-info">
<p className="product-title">{item.title}</p>
<div className="rating">
⭐ {item.rating} ({item.reviews})
</div>
<div className="price">{item.price}</div>
</div>
</article>
))}
</div>
</section>
);
}

export default DealsSection;