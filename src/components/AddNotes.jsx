import { useState, useEffect } from "react";
import ColorsBackground from "./ColorsBackground";

const AddNotes = ({ handleAddNewNote }) => {
	const [title, setTitle] = useState("No Title");
	const [text, setText] = useState("");
	const [color, setColor] = useState("#1f2937");
	const [characterCount, setCharacterCount] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		handleAddNewNote({ title, text, color, characterCount });
		setTitle("No Title");
		setText("");
	};

	const selectColor = (color) => {
		setColor(color);
	};

	useEffect(() => {
		setCharacterCount(text.length);
	}, [text]);

	return (
		<>
			<div className="w-full flex justify-end ">
				<div
					style={{
						backgroundColor: color,
					}}
					className="p-4 w-full mx-auto  max-w-[500px] m-auto absolute  rounded-md mt-2 border-gray-400 "
				>
					<h2 className=" mb-4 font-bold text-white">Add Notes</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-white text-sm font-bold mb-2">
								Title
							</label>
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								style={{ backgroundColor: color }}
								className="shadow appearance-none border rounded w-full py-2 px-3  text-white leading-tight focus:outline-none focus:shadow-outline"
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
								style={{ backgroundColor: color }}
								onChange={(e) => setText(e.target.value)}
								className="shadow text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
								maxLength={500}
							></textarea>
							<div className="w-full flex justify-end">
								<p className="text-white">{characterCount}/500</p>
							</div>
						</div>
						<ColorsBackground onSelectColor={selectColor} />

						<div className="flex items-center justify-end">
							<button
								type="submit"
								className="bg-[#677589] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
