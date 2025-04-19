import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/images/Studyshala.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <Container>
        <div className="w-full mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-2">
        <img src={logo}></img>

            <p className="mt-2 text-sm text-gray-600">
              Studyshala is India's largest online learning <br></br> platform. Download
              our apps to start learning.
            </p>
            <div className="mt-6 pt-4">
              <p className="text-sm font-semibold mb-1">
                Starting your preparation?
              </p>
              <p className="text-sm text-gray-600">
                Call us and we will answer all your questions <br></br> about learning on
                Studyshala
              </p>
              <div className="mt-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V6a1 1 0 01-1 1H5.414L2.293 4.879A1 1 0 012 4.172V3z" />
                  <path d="M6 8v6h6a1 1 0 011 1v2.586a1 1 0 01-.293.707l-1.414 1.414A1 1 0 0110.586 20H10a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707L9.707 15A1 1 0 0110.414 14H12v-2H6z" />
                </svg>
                <span className="text-sm font-bold">Call +91 8585858585</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
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

            <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div>
                <h3 className="font-semibold mb-2">Popular goals</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>IIT JEE</li>
                  <li>UPSC</li>
                  <li>SSC</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Studyshala Centre</h3>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
