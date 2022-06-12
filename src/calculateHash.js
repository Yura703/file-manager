import { createHash } from 'crypto';
import { open } from 'fs/promises';

export const calculateHash = async (path) => {
  const hash = createHash('sha256');

  const fd = await open(path);
  const rs = fd.createReadStream();

  rs.on('data', (chunk) => {
    hash.update(chunk);
  });

  rs.on('end', () => {
    const hex = hash.digest('hex');
    
    console.log(hex);;
  });  
};
