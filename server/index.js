const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3000;

const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')
const static_dir = path.resolve(__dirname, '../dist/')

app.use(express.static(static_dir))
app.use(express.json())

app.get('/api/ver1/catalog', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      res.status(500).send(err)
    }
  })
})

app.get('/api/ver1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      res.status(500).send(err)
    }
  })
})

app.post('/api/ver1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      const cart = JSON.parse(data);
      cart.push(req.body);
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.sendStatus(201)

      })
    } else {
      res.status(500).send(err)
    }
  })
})

app.delete("/api/ver1/cart", (req, res) => {
  fs.readFile(cart_path, "utf-8", (err, data) => {
    if (!err) {
      let cart = JSON.parse(data);
      //подумать
      cart = cart.filter((item) => item.id !== Number(req.body.id));
      fs.writeFile(cart_path, JSON.stringify(cart), "utf-8", (err, data) => {
        res.sendStatus(201);
      });
    } else {
      res.status(500).send(err);
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

