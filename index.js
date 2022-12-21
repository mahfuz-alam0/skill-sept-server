const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const category = require('./Data/category.json');
const course = require('./Data/course.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/categories', (req, res) => {
    res.send(category);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const courseItem = course.find(item => item.category_id === id);
    res.send(courseItem);
});
app.get('/bycategory/:id', (req, res) => {
    const id = req.params.id;
    const courseItem = course.filter(item => item.category_id === id);
    res.send(courseItem);
});

app.get('/course', (req, res) => {
    res.send(course);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})