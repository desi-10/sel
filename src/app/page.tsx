import Freelancers from "@/components/home/freelancers";
import Hero from "@/components/home/hero";
import Jobs from "@/components/home/jobs";
import Popular from "@/components/home/popular";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen flex justify-center items-center bg-black">
        <Hero />
      </div>
      <div className="bg-white">
        <Popular />
      </div>
      <div className="bg-yellow-500">
        <Freelancers />
      </div>
      <div className="bg-white">
        <Jobs />
      </div>
    </main>
  );
}
