import  NotCriticalError  from './NotCriticalError.js';
import { calculateHash } from './calculateHash.js';
import { compressFile } from './compressFile.js';
import { getEOL, getCPUs, getHomeDir, getArchitecture, getUserName } from './getInfoFromOS.js';
import { getPathFiles } from './getPathFiles.js';
import { getToWorkingDirectory } from './getToWorkingDirectory.js';
import  navigationByDir  from './navigationByDir.js';
import { cat, add, rn, cp, mv, rm } from './operationWithFile.js';
import { colorizeMessages } from './colorizeMessages.js';
import { command } from './constants.js';

export {
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
}