/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type ModalProps = {
	clickedImg: string;
	setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};

const Modal: React.FC<ModalProps> = ({ clickedImg, setClickedImg }) => {
	const handleClose = () => {
		setClickedImg("");
	};

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!clickedImg) return null;

	return (
		<div
			className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'
			onClick={handleOverlayClick}
		>
			<div className='relative max-w-full max-h-full'>
				<img
					src={clickedImg}
					alt='Enlarged'
					className='max-w-full max-h-full'
					style={{ maxWidth: "80vw", maxHeight: "80vh" }}
				/>
				<button
					onClick={handleClose}
					className='absolute top-0 right-0 m-4 text-black'
				>
					<FontAwesomeIcon icon={faXmark} size='2x' />
				</button>
			</div>
		</div>
	);
};

export default Modal;
