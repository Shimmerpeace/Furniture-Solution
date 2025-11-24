import image1 from "../../assets/image1.jpeg";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="quote-box">
        <p>
          “I'm absolutely in love with my new living room set! The craftsmanship 
          is outstanding... Truly a five-star experience!”
        </p>

        <div className="testimonial-user">
          <img
            src={image1}
            alt="User Placeholder"
          />
          <span>John Doe</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;