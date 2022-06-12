import { homedir } from 'os';

export const getToWorkingDirectory = async (workDir) => {
  const homeDir = workDir ?? await homedir();

  return `You are currently in ${homeDir}\n`;
}

