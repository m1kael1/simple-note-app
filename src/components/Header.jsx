import { useState, useEffect } from "react";
import { BsPencilSquare, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import AddNotes from "./AddNotes";
import EditNotes from "./EditNotes";
import { motion } from "framer-motion";

const Header = ({ handleAddNewNote, onSearch, handleUpdateNote, onEdit }) => {
	const { data, open } = onEdit;
	const [openSearch, setOpenSearch] = useState(false);
	const [openAddNotes, setOpenAddNotes] = useState(false);

	const handleOpenSearch = () => {
		setOpenSearch(!openSearch);
		setOpenAddNotes(false);
		onEdit.open = false;
	};

	const handleAddNotes = () => {
		setOpenAddNotes(!openAddNotes);
		setOpenSearch(false);
		setOpenSearch(false);
		onEdit.open = false;
	};
	const handleSearch = (e) => {
		const valueSearch = e.target.value;
		onSearch(valueSearch);
	};
	useEffect(() => {
		if (onEdit.open === true) {
			setOpenAddNotes(true);
			setOpenSearch(false);
		} else {
			setOpenAddNotes(false);
			setOpenSearch(false);
		}
	}, [open]);

	return (
		<>
			<div className="sticky top-0 z-50">
				<div className="relative rounded mt-2 flex bg-gray-800 text-white p-4 justify-between items-center ">
					<h1 className="text-xl font-extrabold">Simp.Notes</h1>
					<div className="flex gap-4">
						<div
							onClick={() => {
								handleAddNotes();
							}}
							className={`flex items-center gap-2  bg-gray-600 p-2 rounded hover:bg-gray-700 cursor-pointer ${
								openSearch
									? "max-[500px]:opacity-0 "
									: "max-[500px]:opacity-1 duration-500"
							} `}
						>
							{openAddNotes ? (
								<MdOutlineClose color="white" />
							) : (
								<div className="flex items-center gap-2">
									<span className="hidden">Notes</span>
									<BsPencilSquare />
								</div>
							)}
						</div>
						<div
							className={`flex items-center relative min-w-[32px] bg-gray-600 rounded overflow-hidden ${
								openSearch
									? "max-[500px]:absolute max-[500px]:right-2 max-[500px]:w-[95%]"
									: "invisble"
							} `}
						>
							<input
								onChange={handleSearch}
								type="text"
								name="search notes"
								id="search-notes"
								placeholder="Search notes by title..."
								className={`outline-0 p-2 ${
									openSearch
										? "w-56 max-[500px]:w-full opacity-100"
										: " w-0 opacity-0"
								}
            bg-gray-600 min-[501px]:duration-[1000ms]`}
							/>
							<span
								onClick={() => handleOpenSearch()}
								className="absolute bg-gray-600 p-2 cursor-pointer rounded right-0 "
							>
								{openSearch ? <MdOutlineClose color="white" /> : <BsSearch />}
							</span>
						</div>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{
						opacity: openAddNotes || open ? 1 : 0,
						y: openAddNotes || open ? 0 : -20,
					}}
					transition={{ duration: 0.3 }}
				>
					{openAddNotes && <AddNotes handleAddNewNote={handleAddNewNote} />}
					{open && (
						<EditNotes handleUpdateNote={handleUpdateNote} onEdit={data} />
					)}
				</motion.div>
			</div>
		</>
	);
};

export default Header;
