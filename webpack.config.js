import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    }
  },
  mode: 'development',
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true,
  },
  experiments: {
    outputModule: true,
  },
};