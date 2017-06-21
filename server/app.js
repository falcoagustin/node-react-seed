let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
let routes = require('./api/routes');
app.use('/api', routes);

app.listen(PORT);

console.log(`Server running on port: ${PORT}`);

