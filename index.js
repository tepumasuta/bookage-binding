import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send("I'm here for your soul😈")
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
