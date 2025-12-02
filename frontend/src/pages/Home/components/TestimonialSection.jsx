import avatar from "../../../assets/image1.jpeg";

function TestimonialSection() {
return (
<section className="testimonial-section" aria-label="Customer testimonial">
<div className="quote-box">
<span className="quote-mark start">“</span>
<p>
I am absolutely in love with my new living room set. The craftsmanship is outstanding and the pieces feel elegant and comfortable. Delivery was smooth and the team made sure everything was set up perfectly.
</p>
<div className="testimonial-user">
<img src={avatar} alt="John Doe" loading="lazy" />
<span>John Doe</span>
</div>
<span className="quote-mark end">”</span>
</div>
</section>
);
}

export default TestimonialSection;