import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const getPathFiles = (url, pathArr) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, ...pathArr);

  return filePath;
}