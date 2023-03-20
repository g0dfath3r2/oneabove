import { HiLightBulb } from "react-icons/hi2";
import "./index.css";

const Card = () => {
  return (
    <div className="border text-left card">
      <div className="flex flex-col px-8 py-4">
        <HiLightBulb size={20} style={{marginBottom:"10px"}}/>
        <h1 className="text-2xl font-bold mb-4">Card</h1>
        <p>
        Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
        Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary for testing sometimes.
        Lorem Ipsum rendom text is necessary for testing sometimes.Lorem Ipsum rendom text is necessary.
        </p>
      </div>
    </div>
  );
};

export default Card;
