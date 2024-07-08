import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import google from "/public/google.webp";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import BackHome from "@/components/BackHome";

const Register = () => {
  return (
    <>
      <form className="w-full h-screen grid grid-cols-2">
        <article className="flex justify-center items-center">
          <section className="w-full px-20 lg:px-28">
            <BackHome />
            <div className="flex justify-center mb-5">
              <Logo />
            </div>
            <h1 className="text-2xl text-center mb-2">Register</h1>
            <p className="text-center mb-5">Register to get an account</p>

            <section>
              <div className="space-y-5 mb-5">
                <TextField
                  size="small"
                  label="Username"
                  type="text"
                  className="w-full p-0"
                />
                <TextField
                  size="small"
                  label="Email"
                  type="email"
                  className="w-full p-0"
                />
                <TextField
                  size="small"
                  label="Password"
                  type="password"
                  className="w-full"
                />
                <TextField
                  size="small"
                  label="Confirm Password"
                  type="password"
                  className="w-full"
                />
              </div>

              <Button className="w-full">Create an account</Button>

              <div className="flex justify-center items-center">
                <Link href="/login">
                  <Button variant="link" className="text-xs text-gray-500">
                    Already have an account
                  </Button>
                </Link>
              </div>
            </section>
          </section>
        </article>
        <section className="bg-amber-300 h-full"></section>
      </form>
    </>
  );
};

export default Register;
