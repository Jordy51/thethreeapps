const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			command: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// remove command
yargs.command({
	command: "remove",
	describe: "Remove a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// list Command
yargs.command({
	command: "list",
	describe: "List your notes",
	handler() {
		notes.listNotes();
	},
});

// read Command
yargs.command({
	command: "read",
	describe: "Read a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNotes(argv.title);
	},
});

yargs.parse();

// if (command === "add") {
// 	console.log("Adding  note!");
// } else if (command === "remove") {
// 	console.log("removing  note!");
// }
