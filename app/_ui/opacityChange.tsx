import { motion } from "framer-motion";
import Navbar from "./navbar";

type OpacityChangeProps = {
	changeOpacity: boolean;
};

const OpacityChange: React.FC<OpacityChangeProps> = ({ changeOpacity }) => {
	return (
		<>
			{/* {changeOpacity && (
				<div className='bg-black'>
					<Navbar />
				</div>
			)}
			{
				!changeOpacity && (
					<div className='bg-yellow-600'>
						<Navbar />
					</div>
				)
			} */}
			<div>
				<Navbar />
			</div>
		</>
	);
};

export default OpacityChange;
