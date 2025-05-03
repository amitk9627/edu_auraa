import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/images/websiteLogo.svg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 max-md:px-4">
      <Container>
        <div className="w-full  mx-auto px-2 flex items-start max-md:flex-col  max-md:gap-5 justify-between ">
          <div className="flex flex-col items-start gap-8 max-md:gap-4">
            <div>
              
              <img src={logo} className="max-md:h-8 h-24" />
            
             
              <p className="mt-2 text-sm text-gray-600  max-md:text-justify">
                Eduauraa is India's largest online learning <br></br>{" "}
                platform. Download our apps to start learning.
              </p>
            </div>
            <div className="">
              <p className="text-sm font-semibold mb-1">
                Starting your preparation?
              </p>
              <p className="text-sm text-gray-600">
                Call us and we will answer all your questions <br></br> about
                learning on Eduauraa
              </p>
              <div className="mt-2 flex items-center gap-2">
                <PhoneInTalkIcon />
                <a
                  href="tel:+918585858585"
                  target="_blank"
                  className="text-sm font-bold"
                >
                  Call +91 8585858585
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>About us</li>
                <li>Shikshodaya</li>
                <li>Careers</li>
                <li>Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Help & support</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>User Guidelines</li>
                <li>Site Map</li>
                <li>Refund Policy</li>
                <li>Takedown Policy</li>
                <li>Grievance Redressal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Products</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded"></span>{" "}
                  Learner app
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-indigo-500 rounded"></span>{" "}
                  Educator app
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded"></span>{" "}
                  Parent app
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Popular goals</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>IIT JEE</li>
                <li>UPSC</li>
                <li>SSC</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Eduauraa Centre</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Kota IIT JEE</li>
                <li>Kota NEET UG</li>
                <li>Kota Foundation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Study material</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>UPSC Study Material</li>
                <li>NEET UG Study Material</li>
                <li>CA Foundation Study Material</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
