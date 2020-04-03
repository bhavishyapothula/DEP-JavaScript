import { truncateSync } from 'fs';

const clearFileContent = (filePath: string) => {
  try {
    truncateSync(filePath, 0);
  } catch (err) {
    console.log('Error: Clearing file content.');
  }
};

export default clearFileContent;
