// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4
// http://localhost:3000/comments/5

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// enable cross-origin resource sharing (CORS)
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// create a route
app.get('/comments', (req, res) => {
    const comments = [
        {
            id: 1,
            title: 'Comment 1',
            body: 'Comment 1 body'
        },
        {
            id: 2,
            title: 'Comment 2',
            body: 'Comment 2 body'
        },
        {
            id: 3,
            title: 'Comment 3',
            body: 'Comment 3 body'
        },
        {
            id: 4,
            title: 'Comment 4',
            body: 'Comment 4 body'
        },
        {
            id: 5,
            title: 'Comment 5',
            body: 'Comment 5 body'
        }
    ];

    res.json(comments);
});

// create a route
app.get('/comments/:id', (req, res) => {
    const comments = [
        {
            id: 1,
            title: 'Comment 1',
            body: 'Comment 1 body'
        },
        {
            id: 2,
            title: 'Comment 2',
            body: 'Comment 2 body'
        },
        {
            id: 3,
            title: 'Comment 3',
            body: 'Comment 3 body'
        },
        {
            id: 4,
            title: 'Comment 4',
            body: 'Comment 4 body'
        },
        {
            id: 5,
            title: 'Comment 5',
            body: 'Comment 5 body'
        }
    ];

    const comment = comments.filter(comment => {
        if(comment.id === parseInt(req.params.id)) {
            return comment;
        }
    });

    res.json(comment[0]);
});

// create a route
app.post('/comments', (req, res) => {