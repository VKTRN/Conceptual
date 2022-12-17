// express server
const express = require('express');
const fs      = require('fs');
const cors    = require('cors');

const app     = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  
  const data     = req.body;
  const json     = JSON.stringify(data.keyframes, null, 2);

  console.log(data.filename)
  console.log(data.keyframes)

  fs.writeFileSync(`./src/files/${data.filename}.json`, json);
  const files = fs.readdirSync('./src/files');
  res.send(files);
})

app.get('/', (req, res) => {
  
  const fileName = req.query.fileName;
  const path     = `./src/files/${fileName}`;
  const data     = fs.readFileSync(path);
  const json     = JSON.parse(data);

  res.send(json);
})

app.get('/files', (req, res) => {
  const files = fs.readdirSync('./src/files');
  res.send(files);
})

app.delete('/', (req, res) => {
  const fileName = req.query.fileName;
  const path     = `./src/files/${fileName}`;
  fs.unlinkSync(path);
  const files = fs.readdirSync('./src/files');
  res.send(files);
})

app.listen(3002, () => {console.log('Server is running on port 3002')})

