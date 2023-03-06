const express = require('express');
var cors = require('cors');
const path = require("path");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const app = express();
const port = 3000;

const staticLorem = 'Lorem ipsum dolor sit amet';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

app.use(cors())
app.use(express.static('./public'))
app.get('/', (req, res) => res.send(200))
app.get('/:type/:length/:static', (req, res) => {
    const length = Number(req.params.length);
    const type = req.params.type;
    const string = `${req.params.static === 'true' ? staticLorem : ''} ${type === 'paragraphs' ? lorem.generateParagraphs(length) : type === 'words' ? lorem.generateWords(length) : type === 'lists' ? lorem.generateSentences() : type === 'bytes' ? lorem.generateSentences(1) : lorum.generateWords(length)}`
  res.status(200).json({
    type: req.params.type,
    string,
    bytes: Buffer.byteLength(string, "utf-8")
})
})

app.listen(port, () => {
  console.log(`App running on port:${port}`)
})
