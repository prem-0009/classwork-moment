const express = require('express');
const app = express();//invoking the express() big function



const timer = require('./middleware/timer')

const port = process.env.PORT || 3000;//

app.use(timer)

app.listen(port, () => {
    console.log(`listening on ${port}`)
});
