const fs = require("fs");
const chalk = require("chalk");

const loadfile = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (error) {
    return [];
  }
};
const LIST = () => {
  const notes = loadfile();
  console.log(chalk.blue.inverse("      NOTES LIST       "));
  notes.forEach((element) => {
    console.log(chalk.yellow("* ") + String(chalk.blue(element.title)));
  });
};
const ADD = (title, body) => {
  const notes = loadfile();
  const note = {
    title: title,
    body: body,
  };
  const l = notes.find((note) => note.title == title);
  if (!l) {
    notes.push(note);
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.inverse.green(" Note added! "));
  } else {
    console.log(chalk.inverse.red(" Note already exists! "));
  }
};
const REMOVE = (title) => {
  const notes = loadfile();
  if (notes.length === 0) {
    console.log(chalk.inverse.red("File empty!"));
  } else {
    const nba = notes.filter((baha) => baha.title === title);
    if (nba.length === 0) {
      console.log(chalk.inverse.red(" Note isn't found! "));
    } else {
      notes.splice(notes.indexOf(nba[0]), 1);
      fs.writeFileSync("notes.json", JSON.stringify(notes));
      console.log(chalk.inverse.yellow(" Done deleting! "));
    }
  }
};
const READ = (title) => {
  const notes = loadfile();
  const found = notes.find((baha) => title === baha.title);
  if (found) {
    console.log("\n" + chalk.inverse(found.title));
    console.log(found.body + "\n");
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};
module.exports = {
  ADD: ADD,
  REMOVE: REMOVE,
  LIST: LIST,
  READ: READ,
};
