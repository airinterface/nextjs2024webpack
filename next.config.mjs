import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  experimental: { scss: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

export default nextConfig;
