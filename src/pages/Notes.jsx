import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import CardNote from "../components/CardNote";
import Header from "../components/Header";

const Notes = () => {
	const [notes, setNotes] = useState(() => {
		const savedNotes = JSON.parse(localStorage.getItem("simple-notes-data"));
		return (
			savedNotes || [
				{
					id: nanoid(),
					title: "Simple Notes",
					text: "This is simple notes app",
					date: "5/8/2023",
					color: "#1f2937",
					character: 0,
				},
			]
		);
	});

	useEffect(() => {
		localStorage.setItem("simple-notes-data", JSON.stringify(notes));
	}, [notes]);

	const addNewNote = (note) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title: note.title,
			text: note.text,
			date: date.toLocaleDateString(),
			color: note.color,
			characters: note.characterCount,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
		console.log(newNote);
	};

	const deleteNote = (id) => {
		console.log(id);
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className="flex flex-col items-center mx-4 gap-2 ">
			<div className="container flex-col flex gap-2 ">
				<Header handleAddNewNote={addNewNote} />
				<div className="flex flex-wrap  gap-2 justify-center min-[1300px]:grid min-[1300px]:grid-cols-3 min-[1300px]:gap-4">
					{notes.map((note, index) => (
						<CardNote note={note} handleDeleteNote={deleteNote} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Notes;
