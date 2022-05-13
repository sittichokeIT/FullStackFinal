const express = require('express');
const app = express();
app.use(express.static('./dist/midterm'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/midterm/'}),
);

app.listen(process.env.PORT || 8080);
