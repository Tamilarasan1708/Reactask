import React from "react";


const Button = ({ disabled, onClick, btnstyle, children, type }) => {
	return (
		<button
			className={` px-4 py-2 rounded-md text-base font-medium transition-all ease-in-out ${btnstyle}`}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
