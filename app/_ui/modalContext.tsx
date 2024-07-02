/** @format */
import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModalContext must be used within a ModalProvider");
	}
	return context;
};

export const ModalProvider: React.FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ModalContext.Provider>
	);
};
