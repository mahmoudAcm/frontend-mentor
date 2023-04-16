import copy from '@mahmoudacm/copy';
import * as fs from 'fs';
import * as path from 'path';

copy('./dist', '../challenges');

const distPath = path.join(process.cwd(), './dist');

if (fs.existsSync(distPath)) fs.rm(distPath, { force: true, recursive: true }, () => {});
else console.warn(distPath, 'was not found!');
