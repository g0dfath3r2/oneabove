import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import "./index.css";
import OneAboveLogo from "../../assets/images/Oneabove.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full">
      <footer>
        <nav className="">
          <ul className="flex items-center w-full footer-media-links">
            <li className="w-3/12 px-2 py-4 twitter text-white">
              <a href="#" className="flex items-center justify-center">
                <AiOutlineTwitter size={20} className="mr-2" /> Twitter
              </a>
            </li>
            <li className="w-3/12 px-2 py-4 facebook text-white">
              <a href="#" className="flex items-center justify-center">
                <AiOutlineFacebook size={20} className="mr-2" />
                Facebook
              </a>
            </li>
            <li className="w-3/12 px-2 py-4 instagram text-white">
              <a href="#" className="flex items-center justify-center">
                <AiOutlineInstagram size={20} className="mr-2" />
                Instagram
              </a>
            </li>
            <li className="w-3/12 px-2 py-4 linkedin text-white">
              <a href="#" className="flex items-center justify-center">
                <AiOutlineLinkedin size={20} className="mr-2" />
                Linkedin
              </a>
            </li>
            <li className="w-3/12 px-2 py-4 youtube text-white">
              <a href="#" className="flex items-center justify-center">
                <AiOutlineYoutube size={20} className="mr-2" />
                Youtube
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer px-4 py-12">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
