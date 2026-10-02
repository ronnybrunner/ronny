import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("assets/images", { recursive: true });
for (const width of [320, 640])
  await sharp("Bilder/ronny.png")
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 83 })
    .toFile(`assets/images/portrait-${width}.webp`);
for (const width of [640, 1280])
  await sharp("Bilder/20240623_110212.jpg")
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(`assets/images/outdoor-${width}.webp`);
console.log(
  "Optimierte WebP-Varianten ohne EXIF erzeugt. Originale unverändert.",
);
