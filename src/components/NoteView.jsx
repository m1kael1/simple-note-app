import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../../src/App.css";
import { BsPencilSquare } from "react-icons/bs";

const NoteView = ({ note, handleCloseNote, handleEditNote }) => {
	const { title, text, date, color } = note;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			style={{
				backgroundColor: color,
			}}
			className="z-[51] h-auto min-h-[132px]  max-w-[500px] p-4 w-full md:rounded-md  "
		>
			<div className="w-full relative  flex justify-between items-start ">
				<div>
					<h1 className=" mb-2 text-2xl font-bold tracking-tight text-white">
						{title}
					</h1>

					<p className="text-[14px] mb-2">{date}</p>
				</div>
				<button onClick={() => handleCloseNote()}>
					<MdOutlineClose size={25} />
				</button>
				<span
					className="absolute right-1 bottom-2"
					onClick={() => handleCloseNote()}
				>
					<button onClick={() => handleEditNote(note, true)}>
						<BsPencilSquare size={20} />
					</button>
				</span>
			</div>
			<hr />
			<div className=" mt-2 ">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="custom-scrollbar pr-2 overflow-y-scroll text-justify "
				>
					{text}
				</motion.p>
			</div>
		</motion.div>
	);
};

export default NoteView;
