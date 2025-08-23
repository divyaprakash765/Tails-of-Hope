import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "../ui/label";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("");

  return (
    <div className="w-full bg-black flex h-full">
      {/* Left Side (Form) */}
      <motion.div
        initial={{ x: 1000, opacity: 0 }} // start from right
        animate={{ x: 0, opacity: 1 }} // move to position
        transition={{ duration: 0.8, ease: "easeOut"}}
        className="w-[50%] text-white h-full bg-black"
      >
        <div className="py-20 px-40">
          <Label className="text-white text-3xl font-semibold">Register</Label>
          <div className="mt-4">
            <Form>
              <FormItem>
                <FormLabel>
                  UserName
                  <br />
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="w-[20vw] p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your username"
                  />
                </FormControl>
              </FormItem>

              <FormItem className="mt-2">
                <FormLabel>
                  Email
                  <br />
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    className="w-[20vw] p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </FormControl>
              </FormItem>

              <FormItem className="mt-2">
                <FormLabel>
                  Password
                  <br />
                </FormLabel>
                <FormControl>
                  <input
                    type="password"
                    className="w-[20vw] p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </FormControl>
              </FormItem>

              <FormItem className="mt-4">
                <FormLabel>
                  Choose your role
                  <br />
                </FormLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger className="mt-2 w-[20vw] bg-gray-800 text-white px-4 py-2 rounded-md flex justify-between items-center cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {role || "Select role"}
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-gray-800 text-white rounded-md shadow-lg py-2 w-[20vw]">
                    {["admin", "volunteer", "donor", "vet"].map((item) => (
                      <DropdownMenuItem
                        onClick={() => setRole(item)}
                        key={item}
                        className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormItem>
              <Button className="mt-5">Register</Button>
            </Form>
          </div>
        </div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        initial={{ x: -1000, opacity: 0 }} // start from right
        animate={{ x: 0, opacity: 1 }} // move to center
        transition={{ duration: 0.8, ease: "easeOut"}}
        className="w-[50%] h-full bg-red-900"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619105395391-f9b2737f9073?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Button className="mt-4 px-4 flex items-center">
          <Link to="/login">
            Login<i className="ri-arrow-right-fill mt-1 ml-2"></i>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Register;
