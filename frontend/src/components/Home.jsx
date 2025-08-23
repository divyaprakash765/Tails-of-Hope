import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Home = () => {
  
  return (
    <div
      className="h-[85%] w-screen bg-cover p-4 bg-center bg-no-repeat bg-top"
      style={{
        backgroundImage: `url('https://images.unsplash.com/reserve/UzWklzFdRBSbkRKhEnvc_1-6128.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <Nav />
      <h1
        className="text-7xl font-bold ml-20 mt-10 text-[#BC6022]"
        style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.25)" }}
      >
        Contribute Love,
        <br />
        <span className="text-[#E1A948]">
          Share Food,
          <br />
          <span className="mt-4 text-[#4C7C3A]">Save Lives.</span>
        </span>
      </h1>
      <Button className="rounded-full px-6 py-5 text-xl mt-5 shadow-2xl ml-20 bg-[#BC6022]">
        Community
      </Button>
    </div>
  );
};

export default Home;
