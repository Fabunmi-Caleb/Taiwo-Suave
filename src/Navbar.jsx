import React from "react";

function Navbar() {
  return (
    <nav className="nav-container flex justify-between px-[110px] py-[30px] h-[99px] white-gradient">
      <a href="#" className="suave-logo w-[99px] h-[39px]"></a>
      <div className="nav-links-container w-[399px] h-[39px] font-satoshi font-semibold flex justify-between items-center">
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#" className="text-white bg-[#6034DA] rounded-[4px] px-[10px] py-[5px]">Get started</a>
      </div>
    </nav>
  );
}

export default Navbar;
