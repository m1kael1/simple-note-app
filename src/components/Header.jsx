import React, { useState } from "react";
import { BsPencilSquare, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import AddNotes from "./AddNotes";

const Header = ({ handleAddNewNote }) => {
	const [openSearch, setOpenSearch] = useState(false);
	const [openAddNotes, setAddNotes] = useState(false);

	function handleSearch() {
		setOpenSearch(!openSearch);
	}

	function handleAddNotes() {
		setAddNotes(!openAddNotes);
		console.log(openAddNotes);
	}

	return (
		<>
			<div className="sticky top-0">
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
								style={{
									transition: "opacity 1s",
									opacity: openSearch ? "1" : "0",
								}}
								type="text"
								name="search notes"
								id="search-notes"
								placeholder="Search Notes..."
								className={`outline-0 p-2 ${
									openSearch ? "w-56 max-[500px]:w-full" : " w-0 "
								}
            bg-gray-600 min-[501px]:duration-500`}
							/>
							<span
								onClick={() => handleSearch()}
								className="absolute bg-gray-600 p-2 cursor-pointer rounded right-0 "
							>
								{openSearch ? <MdOutlineClose color="white" /> : <BsSearch />}
							</span>
						</div>
					</div>
				</div>
				<div
					style={{
						transition: "all 1s ease-in-out ",
						clipPath: openAddNotes ? "circle(300%)" : "circle(0%)",
					}}
				>
					<AddNotes handleAddNewNote={handleAddNewNote} />
				</div>
			</div>
		</>
	);
};

export default Header;
