const express = require ('express');

const PORT = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});
// app.post();
// app.put();
// app.delete();

app.listen(PORT, () => { console.log (`istening on port 8000`)

});

