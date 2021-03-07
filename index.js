const { response, request } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(morgan("tiny"));
app.use(morgan(":body"));

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "312312-321-3-123-1",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "31232-23-21-312-3-",
	},
	{
		id: 3,
		name: "Dan abramov",
		number: "2213-23123-12-31",
	},
];

app.get("/", (request, response) => {
	response.send("<h1>Hello World</h1>");
	// response.setHeader("Access-Control-Allow-Origin", "*");
});

app.get("/api/persons", (request, response) => {
	response.json(persons);
});

app.get("/info", (request, response) => {
	const date = new Date();
	const personsNumber = app.length;

	response.send(`<p>Phonebook has info for ${personsNumber}<br> ${date}`);
});

app.get("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find(contact => contact.id === id);

	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.delete("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter(person => person.id !== id);
	response.status(204).end();
});

app.post("/api/persons", (request, response) => {
	const id = Math.floor(Math.random() * 10000);
	const body = request.body;
	const names = persons.map(person => {
		return person.name;
	});

	if (!body.number || !body.name) {
		return response.status(400).json({
			error: "fill name and number!",
		});
	} else if (names.includes(body.name)) {
		return response.status(400).json({
			error: "name already exists",
		});
	}

	const person = {
		id: id,
		name: body.name,
		number: body.number,
	};

	persons = persons.concat(person);

	response.json(person);
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
