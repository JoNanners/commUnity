const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('API is running...'));

app.get('/predict', (req, res) => {
    const text = req.body.text;

    if (!text) {
        return res.status(400).send({ error: 'Text is required' });
    }

    const options = {
        args: [text]
    };

    PythonShell.run('sentiment_analysis.py', options, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Failed to execute Python script' });
        }

        // results is an array of messages collected from print statements in the Python script
        res.send({ sentiment: results[0] });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});