import image6 from "../../../assets/image6.png";
import image7 from "../../../assets/image7.jpeg";
import image8 from "../../../assets/image8.jpeg";
import image9 from "../../../assets/image9.jpeg";
import image10 from "../../../assets/image10.jpeg";
import image11 from "../../../assets/image11.jpeg";
import image12 from "../../../assets/image12.jpeg";
import image13 from "../../../assets/image13.jpeg";
import image14 from "../../../assets/image14.jpeg";

const products = [
{ id: 1, name: "Abesto Comfy Chair", img: image6 },
{ id: 2, name: "Allan Garco Occasional Chair", img: image7 },
{ id: 3, name: "Banozon Table", img: image8 },
{ id: 4, name: "Herimann Sofa", img: image9 },
{ id: 5, name: "Rubens Chair", img: image10 },
{ id: 6, name: "Adwell Full Sleigh Bed", img: image11 },
{ id: 7, name: "Sofa Grey", img: image12 },
{ id: 8, name: "Stool Beige Ottoman", img: image13 },
{ id: 9, name: "Adwell Full Sleigh Bed Grey", img: image14 },
];

function ProductsSection() {
return (
<section className="products-section" aria-labelledby="products-heading">
<h2 id="products-heading">Our Products</h2>
<div className="products-grid">
{products.map((product) => (
<article key={product.id} className="product-card">
<img src={product.img} alt={product.name} className="product-img" loading="lazy" />
<p className="product-name">{product.name}</p>
</article>
))}
</div>
<button type="button" className="btn btn-outline center">
All Products
</button>
</section>
);
}

export default ProductsSection;