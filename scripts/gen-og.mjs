import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'og-image.png')

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e3a22"/>
      <stop offset="100%" stop-color="#0e1f10"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- brass accent dot + eyebrow -->
  <circle cx="92" cy="98" r="5" fill="#b58a4a"/>
  <text x="108" y="105" font-family="Inter, system-ui, sans-serif"
        font-size="20" font-weight="600" letter-spacing="4"
        fill="#d4b079">
    EST. PIN HIGH
  </text>

  <!-- wordmark -->
  <text x="90" y="310" font-family="Inter, system-ui, sans-serif"
        font-size="140" font-weight="800" letter-spacing="-4"
        fill="#faf7f2">Pin High</text>
  <text x="90" y="450" font-family="Inter, system-ui, sans-serif"
        font-size="140" font-weight="800" letter-spacing="-4"
        fill="#b58a4a">Media.</text>

  <!-- tagline -->
  <text x="90" y="540" font-family="Inter, system-ui, sans-serif"
        font-size="26" font-weight="500" letter-spacing="0"
        fill="rgba(250,247,242,0.7)">
    A specialist software studio for the UK golf industry.
  </text>

  <!-- bottom rule -->
  <rect x="0" y="620" width="1200" height="10" fill="#b58a4a"/>
</svg>
`

const buffer = await sharp(Buffer.from(svg)).png().toBuffer()
writeFileSync(outPath, buffer)
console.log(`Wrote ${outPath} (${buffer.length} bytes)`)
