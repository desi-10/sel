import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <main className="bg-amber-300">
      <section className="container py-20 divide-y divide-black space-y-5">
        <div className="flex justify-between space-x-10 py-5">
          <section className="w-96 space-y-5">
            <Image src="" alt="logo" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis soluta illo cum fuga, nobis dicta porro voluptate
              assumenda exercitationem rem, hic nesciunt id sint obcaecati at
              eos minus quibusdam! Dolore.
            </p>
            <ul className="flex items-center space-x-3">
              <li className="bg-black rounded-full p-2">
                <Facebook className="text-white w-4 h-4" />
              </li>
              <li className="bg-black rounded-full p-2">
                <Twitter className="text-white w-4 h-4" />
              </li>
              <li className="bg-black rounded-full p-2">
                <Linkedin className="text-white w-4 h-4" />
              </li>
            </ul>
          </section>

          <section className="flex w-full justify-between space-x-5">
            <div>
              <h3>Resources</h3>
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Products</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3>Community</h3>
              <ul>
                <li>Feature</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>Microsoft</li>
                <li>Desktop</li>
              </ul>
            </div>

            <div>
              <h3>More</h3>
              <ul>
                <li>Terms</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3>Download</h3>
              <p>Download our Android and iOS app</p>
            </div>
          </section>
        </div>

        <section className="flex justify-between items-center py-5">
          <p>copyright</p>

          <div>
            <ul className="flex justify-between items-center space-x-5">
              <li>Private Policy</li>
              <li>Terms and condition</li>
              <li>Security</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Footer;
