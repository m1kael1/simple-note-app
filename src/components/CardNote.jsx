import React from "react";
import { BsTrash3 } from "react-icons/bs";

const CardNote = ({ note, handleDeleteNote }) => {
	const { id, title, text, date, color } = note;
	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className={`flex w-full  flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl `}
		>
			<div className="flex h-full flex-col w-full justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal  text-gray-200">{text}</p>
				<div className="flex justify-between items-center">
					<p className="text-gray-200">{date}</p>
					<span
						onClick={() => handleDeleteNote(id)}
						className="cursor-pointer bg-gray-600 p-2 rounded-lg hover:bg-red-700 duration-500"
					>
						<BsTrash3 size={15} color="white" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default CardNote;
