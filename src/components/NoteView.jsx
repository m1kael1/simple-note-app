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
			className="z-[51] max-h-screen cursor-default  min-h-[150px] md:h-content  max-w-[500px] p-4 w-full md:rounded-md   "
		>
			<div className="w-full relative  flex justify-between items-start l ">
				<div>
					<h1 className=" whitespace-pre-wrap mb-2 mr-2 text-2xl font-bold tracking-tight text-white break-all">
						{title}
					</h1>

					<p className=" text-[14px] mb-2">{date}</p>
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
			<div className="custom-scrollbar my-2 h-[85%] md:max-h-[60vh]   overflow-y-scroll">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="whitespace-pre-wrap  pr-2  text-justify break-all "
				>
					{text}
				</motion.p>
			</div>
			<hr />
		</motion.div>
	);
};

export default NoteView;
