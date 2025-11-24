import image1 from "../../assets/image1.jpeg";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats-container">
      <img
        src={image1}
        alt="Statistics Background"
        className="stats-bg"
      />

      <div className="stats">
        <div><strong>74353</strong><span>Items Sold</span></div>
        <div><strong>6333</strong><span>Happy Clients</span></div>
        <div><strong>20+</strong><span>Awards</span></div>
        <div><strong>20+</strong><span>Partners</span></div>
      </div>
    </div>
  );
}

export default Stats;




