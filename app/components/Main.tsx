import React from "react";
import firstSectionBg from "../../public/images/bgFirstSection3.webp";

function Main() {
  return (
    <main>
      {/* ----------------------------first section---------------------------- */}
      <section
        style={{
          backgroundImage: `url(${firstSectionBg.src})`,
        }}
        className="w-full h-[700px] lg:bg-top 2xl:h-[1100px] lg:h-[800px] bg-no-repeat bg-cover  bg-center flex justify-center  pt-20 lg:pt-36 pr-10"
        id="firstSection"
      >
        {/* -----------------blur if i want------------------------ */}
        {/* <div className="absolute right-0 top-[80px] inset-0 backdrop-blur-[1px] bg-white/10 z-0"></div> */}
        <div className="container relative w-full *:text-white ">
          <h6 className="font-semibold text-xl">Trusted handyman services</h6>
          <h1 className="relative mt-8 after:absolute after:right-0 after:top-[120%] after:xl:top-[150%]     after:content-[] after:w-[80px] after:h-[4px] after:bg-amber-400  text-6xl md:text-7xl font-extrabold w-3/6 sm:w-5/6">
            Trusted handyman services
          </h1>
          <p className="mt-20 text-xl font-normal w-4/6 sm:w-5/6">
            Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo
            eget malesuada praesent sapien masse.
            <span className="hidden md:flex">
              Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue
              leo eget malesuada praesent sapien masse.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
