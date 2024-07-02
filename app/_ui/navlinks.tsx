/** @format */

import FlyoutLink from "./flyoutLink";
import { Portfolio } from "../data_exports";

const PortfolioLinks = Portfolio;

const NavLinks = () => {
	return (
		<div className='flex z-50'>
			<FlyoutLink href='/' FlyoutContent={PortfolioLinks}>
				Work
			</FlyoutLink>
			<FlyoutLink href='/contact'>Contact</FlyoutLink>
		</div>
	);
};

export default NavLinks;

