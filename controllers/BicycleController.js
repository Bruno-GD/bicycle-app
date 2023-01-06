const { Router } = require("express");
const BicycleDb = require("../data-access/bicycle-db");

const router = Router();

router
    // list all
    .get("/bicycles", (req, res) => {
        res.send(BicycleDb.findAll());
    })
    // filter
    .get("/bicycles/:key/:value", (req, res) => {
        res.send(BicycleDb.findBy(req.params.key, req.params.value));
    })
    // create
    .post("/bicycles", (req, res) => {
        let inserted = BicycleDb.create(req.body);
        res.send(inserted);
    })
    // delete
    .delete("/bicycles/:key/:value", (req, res) => {
        res.send(BicycleDb.deleteBy(req.params.key, req.params.value));
    })
    // update
    .post("/bicycle/update/:key/:value", (req, res) => {
        res.send(BicycleDb.update(req.params.key, req.params.value, req.body));
    })

module.exports = router;