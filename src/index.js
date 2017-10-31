// import api from './module-move.js';
// --> Even better for abstraction:
// (don't need to know that it's called api inside the module + can call all inner apis "api" for clarity)
import { default as move } from './module-move.js';

console.log(move);
move.walk();
move.crawl();