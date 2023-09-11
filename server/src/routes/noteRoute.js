const express = require("express");
const noteRouter = express.Router();
const auth = require("../middlewares/auth");
const {getNote, createNote, updateNote, deleteNote} = require("../controllers/noteController");

noteRouter.get("/", auth, getNote);

noteRouter.post("/", auth, createNote);

noteRouter.put("/:id", auth, updateNote);

noteRouter.delete("/:id", auth, deleteNote);


module.exports = noteRouter;