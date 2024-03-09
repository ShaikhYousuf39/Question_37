"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = `large`, text = `i love typescript`) {
    console.log(`you order a ${size} shirt where ${text} printed`);
}
make_shirt();
make_shirt(`medium`);
// different message
make_shirt(`small`, `i need a small shirt`);
