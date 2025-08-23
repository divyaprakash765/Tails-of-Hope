import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="h-[9vh] w-[100%] rounded-full flex items-center justify-between bg-[#FEE7C7]/40 shadow-xl">
      <div className="px-[5vh]">
        <h1 className="text-4xl font-bold">
          Fur<span className="text-[#BC6022]">Care</span>
        </h1>
      </div>
      <div className="flex items-center gap-[25px]">
        <h2 className="text-lg font-semibold">Blog</h2>
        <h2 className="text-lg font-semibold">Report</h2>
        <h2 className="text-lg font-semibold">Community</h2>
        </div>
        <div className="ml-[15vh] flex items-center px-[5vh] gap-[12.5px]">
          <h2 className="text-lg font-semibold"><Link to = "/register">Register</Link></h2>
          <span className="h-[6vh] bg-zinc-400 w-[1.5px]"></span>
          <Button className="bg-[#BC6022]"><Link to = "/login">Login</Link></Button>
      </div>
    </div>
  );
};

export default Nav;
