import { argv } from 'process';
import {
  NotCriticalError,
  colorizeMessages,
  command,
  calculateHash,
  compressFile,
  getEOL, getCPUs, getHomeDir, getArchitecture, getUserName,
  getPathFiles,
  getToWorkingDirectory,
  navigationByDir,
  cat, add, rn, cp, mv, rm,  
} from './src/index.js';

//сделать отлов кастомной ошибки, что бы программа не крашилась

try {
  const param = argv[2].split('=');

  if (param[0] === '--username') {
    const welcomMessage = `Welcome to the File Manager, ${param[1]}!\n`;
    const buyMessage = `Thank you for using File Manager, ${param[1]}!`

    process.stdout.write(welcomMessage);

    process.stdin.on('data', (chunk) => {
      const commandFromChunk = chunk.toString().slice(0, -2).split(' ')[0];
      if(commandFromChunk == '.exit') {
        process.stdin.emit('exit');
      }

      if(!command.includes(commandFromChunk)) {
        throw new NotCriticalError('Invalid input');
      }

      if (commandFromChunk === 'hash') {
        console.log('hash111');
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
console.log(error.name);
  // if (error.name === "NotCriticalError") {
  //   console.log('Error11:' + error);
  // } else {
  //   console.log('Error:' + error);
  //   process.exit(1);
  // }
}

//const path = getPathFiles(import.meta.url, ['constants.js']);
