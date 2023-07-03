import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 8080

// EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// CSS
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
