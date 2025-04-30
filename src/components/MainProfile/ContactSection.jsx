import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-[#2e3543] text-white p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-300">Contact Us</p>
          <h2 className="text-xl font-semibold mb-2">Get in Touch with Us</h2>
          <p className="text-gray-400">
            Join us in transforming education! Whether you're a school looking for digital solutions or a partner eager to collaborate, we'd love to hear from you.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <img src="" className="mt-1 text-white" size={18} />
            <div>
              <p className="font-medium">India</p>
              <p className="text-gray-300">
                Ed5, 2nd floor, south tower, hotel sahara star, opposite domestic airport, vileparle 400057
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img src="" className="mt-1 text-white" size={18} />
            <div>
              <p className="font-medium">Call us</p>
              <p className="text-gray-300">Ring us on +91 00000 00000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
