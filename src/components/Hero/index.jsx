import "./index.css";
import radar from "../../assets/radar.png";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="he-title">
        <h1 className="he-run">
          RUN <br /> CHE<span>NNAI</span>
        </h1>
        <p className="he-desc">
          Every Sunday morning, 6AM. Join hundreds of runners
          <br /> from across the city — from first-timers to
          <br /> seasoned athletes. No pace too slow, no ambition too big.
        </p>
        <div className="he-btns">
          <button className="he-join-btn">JOIN THE NEXT RUN <FaArrowRight /></button>
          <button className="he-view-btn">VIEW ROUTES</button>
        </div>
        <div className="he-information">
          <div className="he-info">
            <h2 className="he-value">420+</h2>
            <p className="he-type">MEMEBRS</p>
          </div>

          <div className="he-info">
            <h2 className="he-value">68</h2>
            <p className="he-type">EVENTS DONE</p>
          </div>
          <div className="he-info">
            <h2 className="he-value">12</h2>
            <p className="he-type">ROUTES</p>
          </div>
          <div className="he-info">
            <h2 className="he-value">3YR</h2>
            <p className="he-type">RUNNING STRONG</p>
          </div>
        </div>
      </div>
      <div className="he-radar">
        <img src={radar} alt="Jawaharlal Nehru Stadium" className="he-img" />
      </div>
    </div>
  );
};
export default Hero;
