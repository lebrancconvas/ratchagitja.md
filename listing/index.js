//   'วันที่',    'เรื่อง', 'เล่ม',    'ตอน', 'ประเภท', 'หน้า', 'เล่มที่',   'URL', 'id'
const fs = require('fs'); 

const csv = fs.readFileSync('../data/ratchakitcha.csv', 'utf8');
const csvList = csv.split('\n').map(list => list.split(','));

// let format = `| Date | Category | Issue | Part | URL | 
// | --- | --- | --- | --- |--- |\n`;

let format = ``; 

// Information
console.log(csvList[1]);

// Categorized 
for(const list of csvList) {
  const date = list[0].split('/').join('');
  const title = list[1];
  const issue = list[2];
  const part = list[3];
  const category = list[4].split(' ').join('');
  const page = list[5];
  const issue_at = list[6];
  const URL = list[7];
  const id = list[8];

  // const fileName1 = `${category}_${issue}_${part}_${date}_Page${page}.md`;
  const fileNameNarzeRecommended = `${URL.split('/').slice(-1)}`.replace('pdf', 'md');

  format += `| ${list[0]} | ${title} | ${issue} | ${part} | ${category} | ${page} | ${issue_at} | ${URL} |\n`;
}
fs.writeFileSync('./list.md', format);
// console.log(format);