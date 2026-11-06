import { writeFile } from 'node:fs/promises';
import { photographyByName } from '../src/data/photography.js';

// Keep full photo provenance in source, without shipping it in the shared UI bundle.
const metadata = {};
for (const [name, photo] of Object.entries(photographyByName)) {
  const details = {};
  if (photo.width !== 1600) details.width = photo.width;
  if (photo.height !== 900) details.height = photo.height;
  if (photo.fit && photo.fit !== 'cover') details.fit = photo.fit;
  if (photo.provenance?.startsWith('report')) details.isSource = true;
  if (photo.variantWidths && [400, 800, 1600].some(size => photo.variantWidths[size] !== size)) {
    details.variantWidths = photo.variantWidths;
  }
  if (Object.keys(details).length) metadata[name] = details;
}
await writeFile(new URL('../src/data/photo-meta.json', import.meta.url), `${JSON.stringify(metadata, null, 2)}\n`);
