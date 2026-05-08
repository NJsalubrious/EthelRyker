const fs = require('fs');
const path = require('path');

const dataPointsDir = path.join(__dirname, 'data-points');
const manifestPath = path.join(dataPointsDir, 'manifest.js');

const files = fs.readdirSync(dataPointsDir).filter(f => f.endsWith('.md'));

const manifest = files.map(file => {
    const content = fs.readFileSync(path.join(dataPointsDir, file), 'utf-8');
    const titleMatch = content.match(/TITLE:\s*(.*)/i);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled Segment';
    const idMatch = file.match(/^0*(\d+)_/);
    const id = idMatch ? `DP_${idMatch[1].padStart(3, '0')}` : `DP_${file}`;
    
    let date = new Date(fs.statSync(path.join(dataPointsDir, file)).mtime).toISOString().split('T')[0];
    const dateMatch = content.match(/DATE:\s*(.*)/i);
    if (dateMatch) {
        date = dateMatch[1].trim();
    } else {
        if (file.includes('Outliers_Defence')) date = '2026-02-18';
        if (file.includes('Alibi_in_the_Ink')) date = '2026-05-09';
    }

    let strippedContent = content
        .replace(/TITLE:\s*.*\n?/ig, '')
        .replace(/DATE:\s*.*\n?/ig, '')
        .trim();

    return {
        id,
        date,
        title,
        content: strippedContent
    };
});

const output = `window.DATA_POINTS_MANIFEST = ${JSON.stringify(manifest, null, 4)};\n`;

fs.writeFileSync(manifestPath, output);
console.log(`Generated manifest.js with ${manifest.length} data points.`);
