import { fileURLToPath } from 'url';
import path from 'path';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  root: path.resolve(__dirname, 'src'), // Fix for root path
  server: {
    port: 8080,
    hot: true,
  },
};
