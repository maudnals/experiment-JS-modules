function fly() {
  console.log("I'm flying");
}

function walk() {
  console.log("I'm walking");
}

function crawl() {
  console.log("I'm crawling");
}

console.log("inner module code is executed");

// export default walk;
// Best ptractice for multiple exports:

const api = {
  walk,
  crawl
};
// same as walk: walk and crawl:crawl, but with es6 shorthand ppties
// that's automatic :)

export default api;