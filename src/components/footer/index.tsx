import {
  BsTwitter,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import "./index.css";
import OneAboveLogo from "../../assets/images/Oneabove.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full">
      <footer>
       

        <div className="footer px-4 py-12 relative">
          <div className=" grid grid-cols-4 footer-section">
            <div className="text-left">
              <img src={OneAboveLogo} alt="" className="h-40" />
              {/* <ul className="flex flex-col ">
                        <li className="text-white">
                            <a href="#">Link</a>
                        </li>
                        <li className="text-white">
                            <a href="#">Link</a>
                        </li>
                        <li className="text-white">
                            <a href="#">Link</a>
                        </li>
                        <li className="text-white">
                            <a href="#">Link</a>
                        </li>
                    </ul> */}
            </div>

            <div className="text-left">
              <h1 className="text-2xl text-white mb-4">Services</h1>
              <ul className="flex flex-col ">
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h1 className="text-2xl text-white mb-4">Useful Links</h1>
              <ul className="">
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h1 className="text-2xl text-white mb-4">About Us</h1>
              <ul className="">
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
                <li className="text-gray-400 leading-loose">
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="z-50 relative px-10 mt-8 footer-copyright">
            <p className="text-gray-500">Copyrights © {year} Osans Studio. All Rights Reserved.</p>
          </div>
          <nav className="absolute right-0 top-0 h-full">
          <ul className="flex flex-col items-center w-full footer-media-links right-40 h-full">
            <li className=" p-4 items-center flex twitter text-white h-full">
              <a href="#" className="flex items-center justify-center">
                <BsTwitter size={20} className="mr-2" /> 
                {/* Twitter */}
              </a>
            </li>
            <li className=" p-4 items-center flex facebook text-white h-full">
              <a href="#" className="flex items-center justify-center">
                <BsFacebook size={20} className="mr-2" />
                {/* Facebook */}
              </a>
            </li>
            <li className=" p-4 items-center flex instagram text-white h-full">
              <a href="#" className="flex items-center justify-center">
                <BsInstagram size={20} className="mr-2" />
                {/* Instagram */}
              </a>
            </li>
            <li className=" p-4 items-center flex linkedin text-white h-full">
              <a href="#" className="flex items-center justify-center">
                <BsLinkedin size={20} className="mr-2" />
                {/* Linkedin */}
              </a>
            </li>
            <li className=" p-4 items-center flex youtube text-white h-full">
              <a href="#" className="flex items-center justify-center">
                <BsYoutube size={20} className="mr-2" />
                {/* Youtube */}
              </a>
            </li>
          </ul>
        </nav>
        </div>

       
      </footer>
    </div>
  );
};

export default Footer;
