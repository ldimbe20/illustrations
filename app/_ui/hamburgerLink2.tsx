/** @format */
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimationLinks from "./animationLinks";

interface HamburgerLinksProps {
	isDropdownOpen: boolean;
}

export default function HamburgerLinks2({
	isDropdownOpen,
}: HamburgerLinksProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence>
			{isDropdownOpen && (
				<motion.div
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={{
						hidden: { opacity: 0, height: 0 },
						visible: { opacity: 1, height: "auto" },
					}}
					transition={{ duration: 0.5 }}
					className='text-center underline-offset-8 decoration-1'
				>
					<AnimationLinks
						text='Graphic Design'
						href='/graphics'
						isHeader={true}
					/>

					<AnimationLinks text='C.R Gibson' href='/gibson' isHeader={false} />
					<AnimationLinks
						text='The Clever Factory'
						href='/clever'
						isHeader={false}
					/>
					<AnimationLinks
						text='J.Jill Clothing'
						href='/jjill'
						isHeader={false}
					/>
					<AnimationLinks text='Wildkin' href='/wildkin' isHeader={false} />
					<AnimationLinks
						text='Illustration'
						href='/illustration'
						isHeader={true}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
