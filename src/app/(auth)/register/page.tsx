import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import google from "/public/google.webp";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";

const Register = () => {
  return (
    <section className="w-full h-screen grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="w-full px-20 lg:px-28">
          <div className="flex justify-center mb-5">
            <Logo />
          </div>
          <h1 className="text-lg lg:text-xl xl:text-4xl text-center mb-3">
            Register
          </h1>
          <p className="text-sm xl:text-base text-center mb-8">
            Register to get an account
          </p>

          <div>
            <div className="space-y-5 mb-3">
              <TextField label="Email" type="email" className="w-full p-0" />
              <TextField label="Password" type="password" className="w-full" />
              <TextField
                label="Confirm Password"
                type="password"
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <Link href="/forgot-password">
                <Button className="p-0" variant="link">
                  Forgotten password
                </Button>
              </Link>
            </div>

            <Button size="lg" className="w-full">
              Login
            </Button>

            <div className="flex justify-center items-center">
              <Link href="/register">
                <Button variant="link" className="text-xs text-gray-500">
                  Already have an account
                </Button>
              </Link>
            </div>

            <div className="flex items-center w-full justify-between mt-1 mb-3">
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="text-sm px-2 text-gray-500">Or</div>
              <div className="h-[1px] w-full bg-gray-300"></div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full mb-5 flex justify-center items-center space-x-3 text-gray-500 py-5"
            >
              <div className="w-6 h-6">
                <Image
                  src={google}
                  alt="google-logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>

              <span className="text-sm">Sign in with Google</span>
            </Button>
          </div>
        </div>
      </div>
      <section className="bg-amber-300 h-full"></section>
    </section>
  );
};

export default Register;
