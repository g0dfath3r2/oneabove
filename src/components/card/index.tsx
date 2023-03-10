import { HiLightBulb } from "react-icons/hi2";
import "./index.css";

const Card = () => {
  return (
    <div className="border text-left card">
      <div className="flex flex-col p-8">
        <HiLightBulb size={20} style={{marginBottom:"10px"}}/>
        <h1 className="text-2xl font-bold mb-4">Card</h1>
        <p>
          We Expertise patent analysts, innovation intelligence specialists,
          technical specialists, licensing analysts, patent agents, and IP
          docketing specialists
          We Expertise patent analysts, innovation intelligence specialists,
          technical specialists, licensing analysts, patent agents, and IP
          docketing specialists
        </p>
      </div>
    </div>
  );
};

export default Card;
