require('./config/config')
const express = require('express');
const app = express();

const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Get Usuario')
})

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {

        res.json({
            persona: body
        })
    }

})

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id

    res.json({
        id
    })
})

app.delete('/usuario', (req, res) => {
    res.json('Delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000');
})