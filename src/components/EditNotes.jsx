import { useState, useEffect } from "react";
import EditColorsBackground from "./EditColorsBackground";

const EditNotes = ({ handleUpdateNote, onEdit }) => {
	const { id, title, text, color, characters } = onEdit;
	const [updateTitle, setUpdateTitle] = useState(title);
	const [updateText, setUpdateText] = useState(text);
	const [updateColor, setUpdateColor] = useState(color);
	const [updateCharacterCount, setUpdateCharacterCount] = useState(characters);

	const handleSubmit = (event) => {
		event.preventDefault();
		handleUpdateNote({
			id,
			updateTitle,
			updateText,
			updateColor,
			updateCharacterCount,
		});
	};

	const selectColor = (color) => {
		setUpdateColor(color);
	};

	useEffect(() => {
		setUpdateCharacterCount(updateText.length);
	}, [updateText]);

	useEffect(() => {
		setUpdateTitle(title);
		setUpdateText(text);
		setUpdateColor(color);
		setUpdateCharacterCount(characters);
	}, [id]);

	return (
		<>
			<div className="w-full flex justify-end ">
				<div
					style={{
						backgroundColor: updateColor,
					}}
					className="p-4 w-full mx-auto  max-w-[500px] m-auto absolute  rounded-md mt-2 border-gray-400 "
				>
					<h2 className=" mb-4 font-bold text-white">Edit Notes</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-white text-sm font-bold mb-2">
								Title
							</label>
							<input
								type="text"
								value={updateTitle}
								onChange={(e) => setUpdateTitle(e.target.value)}
								style={{ backgroundColor: updateColor }}
								className="shadow appearance-none border rounded w-full py-2 px-3  text-white leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-white text-sm font-bold mb-2">
								Notes
							</label>
							<textarea
								value={updateText}
								cols="5"
								rows="5"
								style={{ backgroundColor: updateColor }}
								onChange={(e) => setUpdateText(e.target.value)}
								className="shadow text-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
								maxLength={999}
							></textarea>
							<div className="w-full flex justify-end">
								<p className="text-white">{updateCharacterCount}/999</p>
							</div>
						</div>
						<EditColorsBackground
							onSelectColor={selectColor}
							updateColor={updateColor}
						/>

						<div className="flex items-center justify-end">
							<button
								type="submit"
								className="bg-[#677589] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditNotes;
