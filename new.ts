import { text } from "stream/consumers";

function make_shirt(size: string = `large` , text: string = `i love typescript`): void {
    console.log(`you order a ${size} shirt where ${text} printed`);   
}

make_shirt()
make_shirt(`medium`)

// different message
make_shirt(`small`,`i need a small shirt`)

