const fs = require('node:fs');

try {
    const data = fs.readFileSync('./logs/Proxifier_2k.log', 'utf8');
    console.log(data)
} catch (err) {
    console.error(err)
}
// read number of lines in file
//sort lines, warn, error, or debug?