import { randomUUID } from 'node:crypto';
import { diskStorage } from 'multer';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileName = randomUUID() + '-' + file.originalname;
      cb(null, `${fileName}`);
    },
  }),
};
