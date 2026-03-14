//tsup.config.ts
import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry point
  format: ['cjs', 'esm'],  // Output formats
  splitting: false,        // Split chunks
  sourcemap: true,         // Generate sourcemaps
  clean: true,             // Clean output folder before build
  dts: true,               // Generate .d.ts files
})