const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../public/logger");

// this will display the json formart data in postman
router.get("/", (req, res) => {
  res.json(members);
});

//to get a specific id
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(404).json({ msg: `No member found at ${req.params.id}` });
  }
});

// create a member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    status: req.body.status,
  };
  members.push(newMember);
  res.json(members);
});

module.exports = router;
