const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());


app.post('/events',  async (req,res) => {
    const {type, data} = req.body;

    if (type === "CommentCreated"){
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        const {id, content, postId} = data;
        console.log(data + ":=" + status)
        await axios.post('http://event-bus-svc:4005/events', {
            type: 'CommentModerated' , 
            data: {id, content, postId, status } 
        });
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Listening on 4003');
});