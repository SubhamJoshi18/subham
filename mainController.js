const express = require("express");
const fs = require("fs");

const readAble = JSON.parse(
  fs.readFileSync(`${__dirname}/data/userdata/user.json`, "utf-8")
);
const getAlluser = (req, res) => {
  res.status(200).json({
    status: "Success",
    result: readAble.length,
    data: {
      readAble,
    },
  });
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const check = readAble.find((main) => main.id === id);
  if (!check) res.status(404).json({ message: "Error in getting the user" });

  res.status(200).json({
    status: "Success",
    date: new Date(),
    data: {
      check,
    },
  });
};

const createUser = (req, res) => {
  const newId = readAble[readAble.length - 1].id + 1;
  const merge = Object.assign({ id: newId }, req.body);
  readAble.push(merge);
  fs.writeFile(
    `${__dirname}/data/userdata/user.json`,
    JSON.stringify(merge),
    (err) => {
      res.status(200).json({
        status: "Success",
        data: {
          merge,
        },
      });
    }
  );
};

const updateUser = (req, res) => {
  const patchId = req.params.id;
  const findPatch = Object.assign({ id: patchId }, req.body, {
    new: true,
  });
  console.log(findPatch);
  res.status(200).json({ findPatch });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = readAble.filter((user) => user.id !== id);
  const deleted = readAble.splice(index, -1);
  res.status(200).json({ message: "Deleted", data: index });
};

module.exports = { getAlluser, getUser, createUser, updateUser, deleteUser };
