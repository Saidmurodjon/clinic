
const klentModel = require('./model')
//get
async function getklent(req, res) {
    try {
        const klent = await klentModel.find({})
        res.status(200).json(klent)
    } catch (err) {
        return res.status(400).send(err)
    }
}
// Post
async function addklent(req, res) {
    try {
        const klent = await klentModel.create(req.body)
        res.status(200).json(klent)
    } catch (err) {
        return res.status(400).send(err)
    }
}

// Put
async function apdateklent(req, res) {
    try {
        const klentId = req.params.id
        let foo = await klentModel.findById(klentId)
        foo.tolov = req.body.tolov
        foo.nasiya = req.body.nasiya
        foo.qoldiq = req.body.qoldiq
        if (req.body.qolib) {
            foo.qolib = req.body.qolib
        }
        if (req.body.shablon) {
            foo.shablon = req.body.shablon
        }
        if(req.body.primerka){
            foo.primerka = req.body.primerka
        }
        if(req.body.tayyor){
            foo.tayyor = req.body.tayyor
        }
        foo.save()

        res.status(200).send('malumot yangilandi')
    } catch (err) {
        return res.status(400).send(err)
    }
}

// Delete
async function deleteklent(req, res) {
    try {
        const klentId = req.params.id
        await klentModel.findByIdAndDelete(klentId)
        res.status(200).send('malumot uchirildi')
    } catch (err) {
        return res.status(400).send(err)
    }
}




module.exports = {
    getklent,
    addklent,
    apdateklent,
    deleteklent
}