import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-full h-277 bg-blue-200">
      <div className="container mx-auto p-8">
        <h2 className="font-barlow text-25 font-bold mb-4 text-center">Featured On</h2>

        <div className="flex items-center justify-center">
          <Image src="/featured/left.svg" alt="Featured left 1" width={10} height={10} className="m-5 cursor-pointer" />
          <div className="flex items-center space-x-10 px-5 ">
            <Image
              src="/featured/featuredone.svg"
              alt="Featured Image 1"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <Image
              src="/featured/featuredtwo.svg"
              alt="Featured Image 2"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <Image
              src="/featured/featuredthree.svg"
              alt="Featured Image 3"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <Image
              src="/featured/featuredfour.svg"
              alt="Featured Image 4"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <Image
              src="/featured/featuredfive.svg"
              alt="Featured Image 5"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <Image
            src="/featured/right.svg"
            alt="Featured right 5"
            width={10}
            height={10}
            className="m-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
