import Image from "next/image";
import NavLinksComponent from "./NavLinksComponent";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  return (
    <main className=" bg-white sticky top-0 z-50 backdrop-blur-lg">
      <section className="flex justify-between items-center py-5 container">
        <div className="w-10 h-10">
          <Image src="" alt="logo" width={50} height={50} />
          {/* <Logo /> */}
        </div>

        <NavLinksComponent />

        <div className="flex items-center space-x-3">
          <Link href="/register">
            <Button variant="link" className="bg-gray-100">
              Register
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-black text-white px-4 py-2 rounded-lg">
              Sign In
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
