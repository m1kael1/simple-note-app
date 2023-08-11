import { useState, useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";

const ColorsBackground = ({ onSelectColor, updateColor }) => {
	const [selectedColor, setSelectedColor] = useState(updateColor);
	const colors = [
		"#1f2937",
		"#bb543b",
		"#4b5563",
		"#239D60",
		"#03474d",
		"#04818c",
	];

	const handleColorSelect = (color) => {
		setSelectedColor(color);
		onSelectColor(color);
	};
	useEffect(() => {
		setSelectedColor(updateColor);
	}, [updateColor]);

	return (
		<div className="mb-4">
			<label className="block text-white text-sm font-bold mb-2">Color</label>
			<ul className="flex gap-2">
				{colors.map((color, index) => (
					<li
						key={index}
						onClick={() => handleColorSelect(color)}
						className="w-12 h-12 rounded-full border-2"
						style={{
							background: color,
						}}
					>
						<div className="w-full h-full flex items-center justify-center ">
							{selectedColor === color && (
								<MdOutlineDone size={25} color="white" />
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ColorsBackground;
