import Button from "../button";
import "./index.css"

type interfaceAbout = {
  name: string;
};

const About = (props: interfaceAbout) => {
  const { name } = props;
  return (
    <div className="w-10/12 m-auto py-20 about">
      <div className="flex justify-around about-section ">
        <div className="about-image">

        <img src="" alt="about image" className="h-84" />
        </div>
        <div className=" flex flex-col w-6/12 text-left about-text">
          <h6 style={{color:"#2380c0"}} className="leading-normal pb-2">About {name}</h6>
          <h1 className="text-5xl font-bold leading-normal pb-6">Title For About Page</h1>
          <p style={{color: "#445658"}} className="pb-8 leading-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default About;
