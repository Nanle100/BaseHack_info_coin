import React from "react";

const Footer = () => {
  return (
    <div className="lg:flex gap-10 bg-primary -m-10 mt-5 p-10 text-white">
      {/* one */}
      <div className="lg:w-[30%] p-10">
        <h1>Infocoin</h1>
        <p>Check infocoin in our social media channel</p>
      </div>

      {/* two */}
      <div className="w-full lg:w-[30%] p-10">
        <h1>Data Bundle</h1>
        <p>MTN Bundle</p>
        <p>Glo Bundle </p>
        <p>9mobile Bundle </p>
        <p>Airtel Bundle </p>
      </div>

      {/* three */}
      <div className="lg:w-[30%] p-10">
        <h1>Learn More</h1>
        <p>About US</p>
        <p>Contact Us</p>
        <p>FAQs</p>
        <p>Blogs</p>
      </div>
    </div>
  );
};

export default Footer;
