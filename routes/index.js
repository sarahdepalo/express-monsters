const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Welecome to the monster page'
        },
        partials: {
            partial: 'partial-index'
        }
    })
})

module.exports = router; 
