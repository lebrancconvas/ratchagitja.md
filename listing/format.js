const fs = require('fs');
const format = `
  Date | Category | Issue | Part | URL | 
--- | --- | --- | --- |--- 
Seconds | 301 | 283 | 290 | 286 | 289 
`
fs.writeFileSync('./list.md', format); 