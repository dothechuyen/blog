var express = require('express');
const router = express.Router();
const { Pool, Client } = require('pg')
const db = require("../config/database");

/* GET home page. */
router.get('/', function (req, res, next) {
    Pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        // pool.end()
    })
    res.render('index', { title: 'Express' });
});

// api get database
router.get('/getdata01', async function (req, res, next) {

    const { rows } = await db.query(
        "SELECT * FROM product_info ORDER BY id ASC",
    );
    res.json(rows)

});
router.post('/add', async function (req, res, next) {
    console.log("jgjjhuj");
    var product_name = req.body.product_name,
        product_price = req.body.product_price,
        image = req.body.image;
    const row = await db.query(
        "INSERT INTO product_info (product_name, product_price,image) values ($1,$2,$3)",
        [product_name, product_price, image],
    )
    console.log(row);
    // res.json(rows)
    res.json(row)
});
router.delete(`/delete/:id`, async function (req, res, next) {
    const row = await db.query(
        "DELETE FROM product_info WHERE id=($1)",
        [req.params.id]
    )
    res.json(row)
});


module.exports = router;
