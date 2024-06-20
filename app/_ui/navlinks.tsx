/** @format */

import FlyoutLink from "./flyoutLink";
import AnimationLinks from "./animationLinks";

const Portfolio = () => {
	return (
		<div className='w-64 bg-white p-6 shadow-xl'>
			<div className='mb-3 space-y-3'>
				<AnimationLinks
					text='Graphic Design'
					href='/graphics'
					isHeader={true}
				/>

				<AnimationLinks
					text='Graphic Design'
					href='/graphics'
					isHeader={false}
				/>

				<AnimationLinks text='C.R Gibson' href='/gibson' isHeader={false} />
				<AnimationLinks
					text='The Clever Factory'
					href='/clever'
					isHeader={false}
				/>
				<AnimationLinks text='J.Jill Clothing' href='/jjill' isHeader={false} />
				<AnimationLinks text='Wildkin' href='/jjill' isHeader={false} />
			</div>
			<div className='mb-6 space-y-3'>
				<AnimationLinks
					text='Illustrations'
					href='/illustration'
					isHeader={true}
				/>
			</div>
			<button className='w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white'>
				Contact Me
			</button>
		</div>
	);
};

const NavLinks = () => {
	return (
		<div className='flex z-50'>
			<FlyoutLink href='/' FlyoutContent={Portfolio}>
				Work
			</FlyoutLink>
			<FlyoutLink href='/contact'>Contact</FlyoutLink>
		</div>
	);
};

export default NavLinks;

