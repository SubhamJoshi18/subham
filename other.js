const express = require("express");

const getAlluser2 = (req, res) => {
  res.status(500).json({
    message: "Error get all user",
  });
};

const getUser2 = (req, res) => {
  res.status(500).json({
    message: "Error getting user",
  });
};

const createUser2 = (req, res) => {
  res.status(500).json({
    message: "Error creating a user",
  });
};

const updateUser2 = (req, res) => {
  res.status(500).json({
    message: "error updating user",
  });
};

const deleteUser2 = (req, res) => {
  res.status(500).json({
    message: "Error deleting user ",
  });
};

module.exports = {
  getAlluser2,
  getUser2,
  createUser2,
  updateUser2,
  deleteUser2,
};
