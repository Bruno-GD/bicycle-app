const { Router } = require("express");
const BicycleDb = require("../data-access/bicycle-db");

const router = Router();

router
    // list all
    .get("/bicycles", async (req, res) => {
        res.send(await BicycleDb.findAll());
    })
    // filter
    .get("/bicycles/:key/:value", async (req, res) => {
        res.send(await BicycleDb.findBy(req.params.key, req.params.value));
    })
    // create
    .post("/bicycles", async (req, res) => {
        let inserted = await BicycleDb.create(req.body);
        res.send(inserted);
    })
    // delete
    .delete("/bicycles/:key/:value", async (req, res) => {
        res.send(await BicycleDb.deleteBy(req.params.key, req.params.value));
    })
    // update
    .post("/bicycle/update/:key/:value", async (req, res) => {
        res.send(await BicycleDb.update(req.params.key, req.params.value, req.body));
    })

module.exports = router;