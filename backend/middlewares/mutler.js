import multer from "multer";


const FILE_TYPE_MAP = {
    'application/pdf': 'pdf',
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
  };
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (FILE_TYPE_MAP[file.mimetype]) {
      cb(null, true);
    } else {
      cb(new Error('File format is not supported'), false);
    }
  };
  
  export const singleUpload = multer({ 
    storage: storage,
    fileFilter: fileFilter
  }).single('file');