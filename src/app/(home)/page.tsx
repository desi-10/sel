import BackgroundImages from "@/components/BackgroundImages";
import Freelancers from "@/components/home/freelancers";
import Hero from "@/components/home/hero";
import Jobs from "@/components/home/jobs";
import Popular from "@/components/home/popular";

export default function Home() {
  return (
    <main className="">
      <section className="relative h-screen flex justify-center items-center bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-10 flex justify-center items-center">
          <Hero />
        </div>
        <BackgroundImages />
        <div className="absolute inset-0 w-full h-full bg-black/85"></div>
      </section>
      <div className="bg-white">
        <Popular />
      </div>
      <div className="bg-amber-300">
        <Freelancers />
      </div>
      <div className="bg-white">
        <Jobs />
      </div>
    </main>
  );
}
