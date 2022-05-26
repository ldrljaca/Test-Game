const { Console } = require("console");
const fs = require("fs");

const myLogger = new Console({
  stdout: fs.createWriteStream("normalStdout.txt")
});


class Hero{
    constructor(name, health, bag=[]){
        this.name = name;
        this.health = health;
        this.bag = bag;
    }

    pickUpWeapon(weapon){
        try {
            if(this.bag.length >= 2){
                throw('Your bag is full');
            }

            this.bag.push(weapon);
        } catch (error) {
            console.log(error);
        }
    }

    throwWeapon(){
        try {
            if(this.bag.length === 0){
                throw('Unfortunately, your bag is already empty.')
            }
            this.bag.shift();
        } catch (error) {
            console.log(error);
        }
    }

    switchWeapon(weaponIndex){
        try {
            if(this.bag.length === 0){
                throw('Unfortunately, your bag is empty.')
            }
    
            bag[weaponIndex === 0 ? 1 : 0];
        } catch (error) {
            console.log(error);
        }
    }
}

class Wizard extends Hero{
    constructor(name, health=150, bag=['spell']){
        super(name, health, bag);
    }

    learnSpell(spell){
        this.bag.push(spell)
    }
}

class Swordsman extends Hero{
    constructor(name, health=100, bag=['sword', 'spear']){
        super(name, health, bag);
    }

    takeSword(sword){
        this.bag.push(sword)
    }

    takeSpear(spear){
        this.bag.push(spear)
    }
}

class Monster{
    constructor(name, health=200, attacks=['hit']){
        this.name = name;
        this.health = health;
        this.attacks = attacks;
    }

    hit(){

    }
}

class Dragon extends Monster{
    constructor(name, health, attacks=['hit', 'spitFire']){
        super(name, health, attacks);
    }

    spitFire(){

    }
}

class Spider extends Monster{
    constructor(name, health, attacks=['hit', 'bite']){
        super(name, health, attacks);
    }

    bite(){

    }
}

const dumbledore = new Wizard('Dumbledore');
const longbottom = new Swordsman('Longbottom');
const smaug = new Dragon('Smaug');
const pauk = new Spider('Pauk');

const goodPeeps = [dumbledore, longbottom];
const badPeeps = [smaug, pauk];
const weapons = ['sword', 'spear', 'spell'];

function swordsmanAttack(swordsman){
    switch (swordsman.bag[0]){
        case 'sword':
            return 10;
        case 'spear':
            return 15;
    }
}

function getGoodPlayer(){
    return goodPeeps[Math.round(Math.random())];
}

function getBadPlayer(){
    return badPeeps[Math.round(Math.random())];
}

function gameOn(){
    let goodPlayer = getGoodPlayer();
    console.log('For the good side, player will be of type: ' + goodPlayer.name);
    let badPlayer = getBadPlayer();
    console.log('For the bad side, player will be: ' + badPlayer.name);

    console.log(goodPlayer.health);
    console.log(badPlayer.health);

    while(goodPlayer.health != 0 || badPlayer.health != 0){
        const x = Math.floor(Math.random() * 100);

        let pickAttack = Math.round(Math.random());
    
        if (x < 50) {
            switch (badPlayer.attacks[pickAttack]){
                case 'hit':
                    goodPlayer.health -= 5;
                    myLogger.log(`${badPlayer} je napao ${goodPlayer} pomocu 'hit' napada`);
                    break;
                    case 'spitFire':
                    goodPlayer.health -= 20;
                    myLogger.log(`${badPlayer} je napao ${goodPlayer} pomocu 'spitFire' napada`);
                    break;    
                case 'bites':
                    goodPlayer.health -= 8;
                    myLogger.log(`${badPlayer} je napao ${goodPlayer} pomocu 'bite' napada`);
                    break;
            }
        } else {
            goodPlayer instanceof Wizard ? badPlayer.health -= 20 : badPlayer.health -= swordsmanAttack(goodPlayer);
            myLogger.log(`${goodPlayer} je napao ${badPlayer} pomocu ${goodPlayer.bag[0]}a`);
        }
        console.log(goodPlayer.health);
        console.log(badPlayer.health);
    }

    badPlayer.health === 0 ? myLogger.log(`${goodPlayer} je pobedio u duelu sa ${badPlayer}`) : myLogger.log(`${badPlayer} je pobedio u duelu sa ${goodPlayer}`);
}

gameOn();