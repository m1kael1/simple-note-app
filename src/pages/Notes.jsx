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
					color: "#239D60",
				},
			]
		);
	});

	useEffect(() => {
		localStorage.setItem("simple-notes-data", JSON.stringify(notes));
	}, [notes]);

	function getRandomColor() {
		const colors = ["#4b5563", "#bb543b", "#239D60", "#03474d", "#04818c"];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	const addNewNote = (note) => {
		const date = new Date();
		const color = getRandomColor();
		const newNote = {
			id: nanoid(),
			title: note.title,
			text: note.text,
			date: date.toLocaleDateString(),
			color: color,
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
				<div className="flex flex-wrap gap-2 justify-center min-[1300px]:grid min-[1300px]:grid-cols-3 min-[1300px]:gap-4">
					{notes.map((note, index) => (
						<CardNote key={index} note={note} handleDeleteNote={deleteNote} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Notes;
