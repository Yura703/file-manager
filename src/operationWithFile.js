import { rename, unlink } from 'fs/promises';
import { colorizeMessages } from "./colorizeMessages.js";
import NotCriticalError from "./NotCriticalError.js";

export const cat = () => {
  
}

export const add = async (pathFile) => {
  await fs.promises.open(pathFile, 'wx').catch(() => {
    throw new NotCriticalError('FS operation failed');
  });
  
  console.log(colorizeMessages('File created successfully', 'FgGreen'));
}

export const rn = async (pathFile, newPathFile) => {
  await rename();
}

export const cp = () => {
  
}

export const mv = () => {
  
}

export const rm = async (pathFile) => {
  try {
    await unlink(pathFile);

    console.log(colorizeMessages('File deeleted successfully', 'FgGreen'));
  } catch (error) {
    throw new NotCriticalError('RM operation failed');
  }   
}
