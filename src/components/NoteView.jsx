import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../../src/App.css";

const NoteView = ({ note, handleCloseNote }) => {
	const { title, text, date, color } = note;

	return (
		<div
			className={`fixed visible w-full h-full flex min-w-[300px] justify-center md:items-center left-0 top-0 z-50 text-white bg-black bg-opacity-70 `}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				style={{
					backgroundColor: color,
				}}
				className="h-auto min-h-[132px]  max-w-[500px] p-4 w-full md:rounded-md  "
			>
				<div className="w-full  flex justify-between items-start ">
					<div>
						<h1 className=" mb-2 text-2xl font-bold tracking-tight text-white">
							{title}
						</h1>

						<p className="text-[14px] mb-2">{date}</p>
					</div>
					<button onClick={() => handleCloseNote()}>
						<MdOutlineClose size={25} />
					</button>{" "}
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
		</div>
	);
};

export default NoteView;
