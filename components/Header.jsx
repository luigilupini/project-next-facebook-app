import Image from "next/image";
import logo from "../public/social-facebook.webp";

function Header() {
  return (
    <div>
      {/* Left */}
      <div>
        <Image src={logo} />
      </div>
      {/* Center */}
      {/* Right */}
    </div>
  );
}

export default Header;
