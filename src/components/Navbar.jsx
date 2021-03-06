import React from "react";
import Link from "gatsby-link";

const Navbar = () => (
  <nav class="pa3 pa4-ns">
    <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">
      Site Name
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
      Home
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
      About
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">
      Store
    </a>
    <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">
      Contact
    </a>
  </nav>
);

export default Navbar;
