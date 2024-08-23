const express = require('express');
const router = express.Router();
const { poolPromise } = require('../dbConfig');


router.get('/GetNews', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(`
            SELECT 
                id, title, dscr, img, entryDate, user_entry 
            FROM DeltaMixSite.dbo.News
        `);
        res.json(result.recordset);
    } catch (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
