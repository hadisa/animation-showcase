"use client";

import MyCertificate from "./myCertificate";

const Perks = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/HadisaNoroziCV.pdf"; // Path to your PDF
    link.download = "My_CV.pdf"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="md:pt-32 " id="education">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div
          // ref={ref}
          className="flex items-center flex-col justify-center gap-6"
        >
          <div className=" flex flex-col">
            {/* <Glow2 /> */}
            <p
              className="text-center text-muted sm:text-28 font-serif text-18 relative after:content-[''] 
          after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2"
            >
              Certifications and<span className="text-primary"> Education</span>
            </p>

            <span className="font-serif text-2xl text-gray-200  ">
              Interested in working together? Download my resume to learn more
              about my experience and skills!
            </span>
            <button
              onClick={handleDownload}
              className="border p-2 w-fit justify-center text-gray-200 border-primary"
            >
              Download Resume
            </button>
            <MyCertificate />
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div> */}
    </section>
  );
};

export default Perks;
