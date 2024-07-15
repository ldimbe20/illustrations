/** @format */

import FlyoutLink from "./flyoutLink";
import { Portfolio } from "../data_exports";

const PortfolioLinks = Portfolio;

const NavLinks = () => {
  return (
    <div className="z-30 flex">
      <FlyoutLink href="/">Home</FlyoutLink>
      <FlyoutLink href="/graphics">Graphic Design</FlyoutLink>
      <FlyoutLink href="/illustration">Illustrations</FlyoutLink>
      <FlyoutLink href="/development">Development</FlyoutLink>
      <FlyoutLink href="/contact">Contact</FlyoutLink>
    </div>
  );
};

export default NavLinks;
