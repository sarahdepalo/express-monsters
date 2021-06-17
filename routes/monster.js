const express = require('express');
const router = express.Router();

const monsters = require('../model/db');

router.get('/:monsterSlug?', (request, response) => { //variable starts with : add ? to indicate that it's optional
    // console.log('DO WE HAVE A SLUG? ', request.params.monsterSlug)
    if (!!request.params.monsterSlug) {
        let monsterName = '';
        let monsterSpecies = '';

        const theMonster = monsters.find(monster => monster.slug === request.params.monsterSlug);
        console.log("The monster is: ", theMonster)

;        response.render('template', {
            locals: {
                title: theMonster.name,
                species: theMonster.species
            },
            partials: {
                partial: "partial-monster-details"
            }
        })
    } else {

        response.render('template', {
            locals: {
                title: 'MONSTER!',
                data: monsters
            },
            partials: {
                partial: 'partial-monster-list'
            }
        })
    }
});

module.exports = router;