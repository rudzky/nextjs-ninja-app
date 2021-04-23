import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image src="/flutter.svg" width={60} height={75} />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
