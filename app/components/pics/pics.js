import React from "react";
import Image from "next/image";

const Pics = () => {
  return (
    <div className="h-700 bg-white flex justify-evenly items-center p-5">
      {/* Pic 1 */}
      <div className="text-center flex flex-col items-center py-12 px-8">
        <Image src="/pics/image3.svg" alt="Pic 3" width={120} height={120} className="cursor-pointer" />
        <h3 className="font-barlow text-13 font-bold my-4">Visibility</h3>
        <p className="font-barlow text-4 font-medium text-center text-gray-700">
          Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum
          visibility{" "}
        </p>
      </div>

      {/* Pic 2 */}
      <div className="text-center flex flex-col items-center py-12 px-8">
        <Image src="/pics/image2.svg" alt="Pic 2" width={150} height={150} className="cursor-pointer" />
        <h3 className="font-barlow text-13 font-bold my-4">Real Local Agents</h3>
        <p className="font-barlow text-4 font-medium text-center text-gray-700">
          You are backed by a team of Real estate agents who know the market in and out. With their market insights,
          experience and sound data, your home will sell in no time.{" "}
        </p>
      </div>

      {/* Pic 3 */}
      <div className="text-center flex flex-col items-center py-12 px-8">
        <Image src="/pics/image4.svg" alt="Pic 4" width={150} height={150} className="cursor-pointer" />
        <h3 className="font-barlow text-13 font-bold my-4">Email & Notification</h3>
        <p className="font-barlow text-4 font-medium text-center text-gray-700">
          Users get instant notifications about new listings, price hikes, price drops, and neighborhood alerts. We get
          your property shown to people who are actively looking and eager to buy.{" "}
        </p>
      </div>

      {/* Pic 4 */}
      <div className="text-center flex flex-col items-center py-12 px-8">
        <Image src="/pics/image1.svg" alt="Pic 1" width={150} height={150} className="cursor-pointer" />
        <h3 className="font-barlow text-13 font-bold my-4">Professional photos</h3>
        <p className="font-barlow text-4 font-medium text-center text-gray-700">
          With professional staging and photos, we make your house reach the best of its abilities and show it off
          because looks are what sell.
        </p>
      </div>
    </div>
  );
};

export default Pics;
