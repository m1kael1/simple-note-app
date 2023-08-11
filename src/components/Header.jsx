import { motion } from "framer-motion";
import { useState } from "react";
import { BsPencilSquare, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import AddNotes from "./AddNotes";

const Header = ({ handleAddNewNote, onSearch }) => {
	const [openSearch, setOpenSearch] = useState(false);
	const [openAddNotes, setOpenAddNotes] = useState(false);

	const handleOpenSearch = () => {
		setOpenSearch(!openSearch);
		setOpenAddNotes(false);
	};
	const handleSearch = (e) => {
		const valueSearch = event.target.value;
		onSearch(valueSearch);
	};

	function handleAddNotes() {
		setOpenAddNotes(!openAddNotes);
		setOpenSearch(false);
	}

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
								placeholder="Search Notes..."
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
					animate={{ opacity: openAddNotes ? 1 : 0, y: openAddNotes ? 0 : -20 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					{openAddNotes && <AddNotes handleAddNewNote={handleAddNewNote} />}
				</motion.div>
			</div>
		</>
	);
};

export default Header;
