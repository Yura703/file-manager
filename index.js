import { argv } from 'process';
import { homedir } from 'os';
import { resolve } from 'path';
import * as readline from 'readline';
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
import { ls, up } from './src/navigationByDir.js';

try {
  const param = argv[2].split('=');
  let workDir = await homedir() ;

  if (param[0] === '--username') {
    const welcomMessage = `Welcome to the File Manager, ${param[1]}!\n`;
    const buyMessage = `Thank you for using File Manager, ${param[1]}!`

    // const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    // const answer = await rl.question(
    //   'What do you think of Node.js? '
    // );    

    process.stdout.write(welcomMessage);  
    process.stdout.write( await getToWorkingDirectory());     

    process.on('SIGINT', () => {
      process.stdin.emit('exit');
    });

    process.stdin.on('exit', () => {
      process.stdout.write(buyMessage);
      process.exit(0);
    });

    process.stdin.on('data', (chunk) => {
      const commandFromChunk = chunk.toString().slice(0, -2).split(' ')[0];
      if(commandFromChunk == '.exit') {
        process.stdin.emit('exit');
      }

      if(!command.includes(commandFromChunk)) {
        console.log(colorizeMessages('Invalid input', 'FgRed'));
      }

      // if (commandFromChunk === 'hash') {
      //   console.log('hash111');
      // }

      if (commandFromChunk === 'ls') {
        ls(workDir);
        console.log('\n');
        getToWorkingDirectory(workDir).then(data => console.log(data));
      }

      if (commandFromChunk === 'up') {
         workDir = up(workDir);
         getToWorkingDirectory( workDir).then(data => console.log(data));
      }

    //   if (commandFromChunk.split('cd').length > 2) {
    //     console.log(commandFromChunk.split('cd'));
    //     const path = resolve(commandFromChunk.split('cd')[1]);
    //     workDir = cd(path);
    //     getToWorkingDirectory( workDir).then(data => console.log(data));
    //  }


    });  

  } else {
    throw new Error('Missing Username');
  }

} catch (error) {   
  if (error.name === "NotCriticalError") {
    console.log('Operation failed');
  } else {
    console.log('Error:' + error);
    process.exit(1);
  }
}

//const path = getPathFiles(import.meta.url, ['constants.js']);
