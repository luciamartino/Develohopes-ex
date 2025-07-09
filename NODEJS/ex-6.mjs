// Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file.
// The documentation for this method is on the Node.js File system page.

import { writeFile } from "node:fs";

//fs.writeFile(file, data, options(encoding), callback)

writeFile(
    "text-1.txt",
    "Babbling Bumbling Band Of Baboons",
    { enconding: "utf-8" },
    function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File written successfully, I guess");
    }
);
