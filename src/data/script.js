const fs = require('fs');

const avatarImages = [
    'https://miro.medium.com/v2/resize:fit:1200/1*lbRRHICAZjLkotvrMY7MLQ.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Sg4DhpemTe4pg8Jsj7e_2jYla-ygzmfwEfIjGIoObzHQbDt6GlKfpt8IrJlb1D2u9x4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqQArqbtAdpxeLsGwtlXkTo0aJpzDi7VanHOG5HwfzoLxommfKwFxIUj1lzZQSfXh078&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fjjYfJWcu4XyiNgEz08cpAqme93TePmnKXCscwJRNnMNyr4kS26iI16FctxRhW3J1Fo&usqp=CAU',
    'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuw4RvHPQLVBlY9JOK9iPil915zdJDZDbMxMT1xFvWWDYuUWa8YEcV3m_aoDCbYCe9fvU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CLGwd5gyZmdWPej3UW0pk5LG6xmmTTI-A6dOmAk6yfh3sQxe2--4X4GZtffUOPi7V4Q&usqp=CAU'
];
const iconImages = {
    "PDF": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RXryQpl8D8Hde0mGFnRVwtyIxA3kgrRFCw&s",
    "DOC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWjehuFOfxKeIqTN84kbXlDItw2wYd1UtFg&s",
    "XLSX": "https://cdn-icons-png.flaticon.com/512/9496/9496456.png",
    "JPG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QCkQiZjdezceJytgLx6qN9bWG_8EbbVn0w&s",
};

const state = ['paid', 'pending', 'rejected']
const categories = ['Travel', 'Food', 'Documentation', 'Culture', 'Maintenance', 'Services', 'Other']
const name = 'src/data/clients.json';

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];


var m = JSON.parse(fs.readFileSync(name).toString());
m.clients.forEach((p, idx) => {
    p.avatar = avatarImages[idx];
    p.documents.forEach(d => {
        d.state = getRandom(state);
    })
    p.files.forEach(f => {
        f.icon = iconImages[f.file_type]
        f.categories = getRandom(categories);
    })
});
fs.writeFileSync(name, JSON.stringify(m));