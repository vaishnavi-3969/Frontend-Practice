// import fs from 'node:fs/promises';

// new Array(1000 * 20).fill(0).map((_,i) => {
//     console.log(i)
// })

// const wait = (time, cb) => {
//     setTimeout(() => {
//         cb()
//     }, time)
// }

// wait(3000,() => console.log('3s'))


// const readPjson = async () => {
//     const pjsonPath = new URL('./file.txt', import.meta.url).pathname
//     console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')));
// }

// readPjson()

import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const readPjson = async () => {
    const pjsonPath = fileURLToPath(new URL('./package.json', import.meta.url));
    console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')));
}

const writeFile = async () => {
    const newFile = fileURLToPath(new URL('./file.txt', import.meta.url));
    await fs.writeFile(newFile, `console.log('yooooo!')`);
}

// readPjson();
writeFile();

