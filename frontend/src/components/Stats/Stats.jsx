import image1 from "../../assets/image1.jpeg";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="stats-container" role="region" aria-label="Company statistics">
      <img
        src={image1}
        alt="Statistics Background"
        className="stats-bg"
        aria-hidden="true"
      />
      <div className="stats">
        <div tabIndex="0"><strong>74353</strong><span>Items Sold</span></div>
        <div tabIndex="0"><strong>6333</strong><span>Happy Clients</span></div>
        <div tabIndex="0"><strong>20+</strong><span>Awards</span></div>
        <div tabIndex="0"><strong>20+</strong><span>Partners</span></div>
      </div>
    </div>
  );
}




