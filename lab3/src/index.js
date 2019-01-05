const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000

app.get('/', (req, res) => res.send('Hello World! - GT Docker workshop'))

app.get('/db', (req, res) => {
    const host = process.env.APP_DB_HOST || 'localhost'
    res.send(`I\'m using ${host}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))