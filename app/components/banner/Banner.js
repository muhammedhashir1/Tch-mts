import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-1000">
      <Image src="/banner/banner.svg" alt="Banner Image" width={1920} height={1000} />

      {/* Content Overlaid on Banner */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold mb-4 font-barlow text-black">Thinking of selling your home?</h1>
        <p className="text-x-lg font-barlow text-black">
          Get an instant estimate of your home’s value. You can quickly determine the estimated value of your home by
          answering a few quick questions.
        </p>

        {/* Search Bar */}
        <div className="mb-4 pt-5">
          <input
            type="text"
            placeholder="Enter your address"
            className="w-11/12
            h-50
            rounded-lg
            border-1
            p-2
            bg-white
            text-primary
            placeholder-primary
            focus:border-primary
            focus:outline-primary"
          />
        </div>

        {/* Button */}
        <button className="w-52 h-14 rounded-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
          Get Free Estimate
        </button>
      </div>
    </div>
  );
};

export default Banner;
