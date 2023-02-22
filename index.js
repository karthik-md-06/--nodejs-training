var xlsx=require('xlsx');

var workbook=xlsx.readFile('data/sample.xlsx');

let worksheet=workbook.Sheets[workbook.SheetNames[0]];

for (let index = 2; index < 6; index++) {
    const id=worksheet[`A${index}`].v;
    const name=worksheet[`B${index}`].v;

    console.log({
        id:id,name:name
    })    
}