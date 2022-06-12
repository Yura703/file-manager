import { readdir } from 'fs/promises';
import { normalize } from 'path';
import { colorizeMessages } from './colorizeMessages.js';
import NotCriticalError from './NotCriticalError.js';

export const up = (path) => {
  if (path.length > 3) {
    const newPath = normalize(path + '/../') 

    return newPath;
  } 

  console.log(colorizeMessages('Operation failed', 'FgRed'));
  return path;
}

export const cd = (path) => {
  return path;
}

export const ls = async (path) => {
  console.log(path);

  await readdir(path)
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      //throw new NotCriticalError("Operation failed");
      console.log(colorizeMessages('Operation failed', 'FgRed'));
    })
}

export default {
  up,
  cd,
  ls,
}
