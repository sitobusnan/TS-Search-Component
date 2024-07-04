const fs = require('fs');

const avatarImages = [];
const iconImages = {
    "PDF": "pdf.png",
    "DOC": "doc.png",
    "XLSX": "xls.png",
    "JPG": "jpg.png",
};
const name = './client.json';

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}


var m = JSON.parse(fs.readFileSync(name).toString());
m.forEach((p) => {
    p.avatar = getRandom(avatarImages)
    p.files.forEach(f => {
        f.icon = iconImages[f.file_type]
    })
});
fs.writeFileSync(name, JSON.stringify(m));