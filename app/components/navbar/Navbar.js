import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 px-14 h-30 flex justify-between items-center font-barlow text-base font-normal sticky top-0 z-10">
      {/* Left Side Icon */}
      <div className="pr-4 cursor-pointer">
        <Image src="/navbar/logo.svg" width={249} height={62} alt="Left Icon" />
      </div>

      {/* Right Side Data */}
      <div className="flex items-center space-x-6">
        {/* Mobile Data */}
        <div className="flex items-center pr-4 top-9 left-130 cursor-pointer">
          <Image src="/navbar/phone.svg" width={22} height={22} alt="Mobile Icon" />
          <p className="pl-2">+1 (905) 206-1444</p>
        </div>

        {/* Mail Data */}
        <div className="flex items-center cursor-pointer">
          <Image src="/navbar/mail.svg" width={22} height={22} alt="Mail Icon" />
          <p className="pl-2">info@thecanadianhome.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
