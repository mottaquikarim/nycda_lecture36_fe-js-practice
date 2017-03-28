const express = require('express');
const app = express();

app.use('/foobar', express.static('./public', {
    index: ['index.html']
}));

app.listen(3003, () => {
    console.log('Server started at port 3003');
});
