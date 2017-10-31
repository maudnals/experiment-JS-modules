function _commandMove() {
  // brain commands to move;
}

function walk() {
  _commandMove();
  console.log("I'm walking");
}

function crawl() {
  _commandMove();
  console.log("I'm crawling");
}

console.log("inner module code is executed");

// export default walk;
// ----> Best practice for multiple exports:

const api = {
  walk,
  crawl
};
// same as walk: walk and crawl:crawl, but thx to es6 shorthand ppties
// that's automatic :)

export default api;