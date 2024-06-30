/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

type ModalProps = {
	clickedImg: string;
	setClickedImg: React.Dispatch<React.SetStateAction<string>>;
};

const Modal: React.FC<ModalProps> = ({ clickedImg, setClickedImg }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsOpen(false);
			setIsClosing(false);
			setClickedImg("");
		}, 700);
	};

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	useEffect(() => {
		if (clickedImg) {
			setIsOpen(true);
		}
	}, [clickedImg]);

	if (!clickedImg && !isClosing) return null;

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-700'}
            ${isOpen && !isClosing ? "opacity-100" : "opacity-0"}`}
			onClick={handleOverlayClick}
		>
			<div className='relative max-w-full max-h-full'>
				<img
					src={clickedImg}
					alt='Enlarged'
					className={`max-w-full max-h-full ${
						isOpen && !isClosing
							? "transform scale-100 opacity-100"
							: "transform scale-50 opacity-0"
					}`}
					style={{ maxWidth: "80vw", maxHeight: "80vh" }}
				/>
				{isOpen && !isClosing && (
					<button
						onClick={handleClose}
						className='absolute top-0 right-0 m-4 text-slate-500 transition-opacity delay-700'
					>
						<FontAwesomeIcon icon={faXmark} size='1x' />
					</button>
				)}
			</div>
		</div>
	);
};

export default Modal;
