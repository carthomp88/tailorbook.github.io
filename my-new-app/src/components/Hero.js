import React from "react";

const Hero = () => {
  return (
    <>
      <section 
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('your-image-url.jpg')", backgroundColor: 'transparent' }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Always Follow Your Dreams
          </h1>
          <div className="flex justify-center space-x-6 mt-8">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Register
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
