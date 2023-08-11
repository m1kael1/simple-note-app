import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import NoteView from "./NoteView";
import { motion } from "framer-motion";

const CardNote = ({ note, handleDeleteNote, handleEditNote }) => {
	const [openNote, setOpenNote] = useState(false);
	const { id, title, text, date, color, characters } = note;

	const handleOpenNote = () => {
		setOpenNote(!openNote);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			style={{
				backgroundColor: color,
			}}
			className={`flex relative cursor-pointer flex-col items-center border rounded-lg shadow md:max-w-[356px] md:flex-row lg:max-w-[490px] group w-full min-h-[132px] 	${
				openNote ? " invisible " : " "
			} `}
		>
			<div
				onClick={() => handleOpenNote()}
				className="flex h-full flex-col w-full justify-between p-4 leading-normal "
			>
				<div>
					<h5 className="mb-2 text-2xl font-bold pr-6  tracking-tight text-white">
						{title}
					</h5>
					<p className="mb-3 font-normal w-full h-[auto] text-justify text-white overflow-y-auto truncate ">
						{text}
					</p>
				</div>

				<div className="flex justify-between items-center text-white">
					<p>{date}</p>
					<p>{characters}/500</p>
				</div>
			</div>

			<span
				onClick={() => handleDeleteNote(id)}
				className="absolute right-4 top-4 cursor-pointer bg-gray-600  p-2 rounded-lg hover:bg-red-700 duration-200 lg:opacity-[0%] group-hover:opacity-[100%] "
			>
				<BsTrash3 size={15} color="white" />
			</span>
			{openNote && (
				<div
					className={`fixed visible w-full h-full flex min-w-[300px] justify-center md:items-center left-0 top-0 z-50 text-white bg-black bg-opacity-70 `}
				>
					<span
						onClick={() => handleOpenNote()}
						className="fixed w-full h-full min-w-[300px] min-h-[100vh]"
					></span>
					<NoteView
						note={note}
						handleCloseNote={handleOpenNote}
						handleEditNote={handleEditNote}
					/>
				</div>
			)}
		</motion.div>
	);
};

export default CardNote;
