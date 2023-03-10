import  {FaArrowCircleRight} from "react-icons/fa";
import "./index.css"

const Button = () => {
  return (
    <>
      <button className="flex justify-around items-center button">
        <span className="text-xl">Learn More</span> <FaArrowCircleRight size={25} />
      </button>
    </>
  );
};

export default Button;
