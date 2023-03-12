import Card from "../card";
import "./index.css";
import { FaServicestack } from "react-icons/fa";

const Services = () => {
  return (
    <div className="p-8 w-9/12 m-auto pb-4 mb-12 service-container">
      <h1 className="pb-4 services text-center">
        <span className="flex items-center justify-center">
          <FaServicestack size={20} />
          <span className="text-2xl ml-2 font-medium"> Core Services</span>
        </span>
      </h1>
      <p className="font-bold text-lg pb-8">
        It is a long established fact that a reader will be distracted by.It is
        a long established fact that a reader will be distracted by
      </p>

      <div className="service-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
