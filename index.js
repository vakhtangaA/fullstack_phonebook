require("dotenv").config();

const { response, request } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// local

const Contact = require("./models/contact");

const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(morgan(":body"));

morgan.token("body", (req, res) => JSON.stringify(req.body));

app.get("/api/persons", (request, response) => {
	Contact.find({}).then(contacts => {
		response.json(contacts);
		// console.log(contacts);
	});
});

app.get("/info", (request, response) => {
	const date = new Date();

	Contact.countDocuments({}, function (err, count) {
		if (err) {
			console.log(err);
		} else {
			response.send(
				`<p>Phonebook has info for ${count} persons<br> ${date}`
			);
		}
	});
});

app.get("/api/persons/:id", (request, response, next) => {
	Contact.findById(request.params.id)
		.then(contact => {
			if (contact) {
				response.json(contact);
			} else {
				response.status(404).end();
			}
		})
		.catch(error => {
			next(error);
		});
});

app.delete("/api/persons/:id", (request, response, next) => {
	Contact.findByIdAndRemove(request.params.id)
		.then(contact => {
			response.status(204).end();
		})
		.catch(error => next(error));
});

app.post("/api/persons", (request, response) => {
	const body = request.body;
	if (body.name === undefined) {
		return response.status(400).json({ error: "content missing" });
	}
	const contact = new Contact({
		name: body.name,
		number: body.number,
		date: new Date(),
	});
	contact.save().then(savedContact => {
		response.json(savedContact);
	});
});

app.put("/api/persons/:id", (request, response, next) => {
	const body = request.body;

	const contact = {
		name: body.name,
		number: body.number,
	};

	Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
		.then(updatedContact => {
			response.json(updatedContact);
		})
		.catch(error => next(error));
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
	console.error(error.message);

	if (error.name === "CastError") {
		return response.status(400).send({ error: "malformatted id" });
	}

	next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
