import { argv } from 'process';
import { getPathFiles } from './src/getPathFiles.js';

import { command } from './src/constants.js';

try {
  const param = argv[2].split('=');

  if (param[0] === '--username') {
    const welcomMessage = `Welcome to the File Manager, ${param[1]}!\n`;
    const buyMessage = `Thank you for using File Manager, ${param[1]}!`

    process.stdout.write(welcomMessage);

    process.stdin.on('data', (chunk) => {
      if(chunk.toString().slice(0, -2) == '.exit') {
        process.stdin.emit('exit');
      }

      if(!command.includes(chunk.toString().slice(0, -2))) {
        throw new Error('Invalid input');
      }
    });  

    process.on('SIGINT', () => {
      process.stdin.emit('exit');
    });

    process.stdin.on('exit', () => {
      process.stdout.write(buyMessage);
      process.exit(0);
    });



  } else {

    throw new Error('Missing Username');
  }

} catch (error) {
  console.log('Error:' + error);
}

//const path = getPathFiles(import.meta.url, ['constants.js']);
