import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const AddNotes = ({ handleAddNewNote }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		handleAddNewNote({ title, text });
		setTitle("");
		setText("");
	};

	return (
		<>
			<div className="w-full flex justify-end">
				<div className="p-4 w-full mx-auto max-w-[600px] m-auto absolute  bg-gray-800 rounded-md mt-2 border-gray-400 ">
					<h2 className=" mb-4 font-semibold text-white">Add Notes</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-white text-sm font-bold mb-2">
								Title
							</label>
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-600 text-white leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-white text-sm font-bold mb-2">
								Notes
							</label>
							<textarea
								value={text}
								cols="5"
								rows="5"
								onChange={(e) => setText(e.target.value)}
								className="shadow bg-gray-600 text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
							></textarea>
						</div>
						<div className="flex items-center justify-end">
							<button
								type="submit"
								className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddNotes;
