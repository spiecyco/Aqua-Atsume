class Fish {
	constructor(name, stars, effects, x, y, speed, dir, src) {
		this._name = name;
		this._stars = stars;
        this._effects = effects;
        this._x = x;
        this._y = y;
        this._speed = speed;
        this._dir = dir;
		this._src = src;
	}

	get name() {
		return this._name;
    }    

	get stars() {
		return this._stars;
	}

	get effects() {
		return this._effects;
	}

	get src() {
		return this._src;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
    
    get speed() {
        return this._speed;
    }

    get dir() {
        return this._dir;
    }

    set speed(n) {
        this._speed = n;
    }

    set x(n) {
        this._x = n;
    }

    set y(n) {
        this._y = n;
    }

    move() {
        if (this.dir > 0) {
            if (!(this.x > 1100)) {
                this.x += this.dir * this.speed;
            } else {
                this.x = 1080 * -0.2;
                this.y = Fish.randomStart().y;
                this.speed = Math.random() * 2 + 1;
            }
        } else {
            if (!(this.x < 1080 * -0.2 - 20)) {
                this.x += this.dir * this.speed;
            } else {
                this.x = 1080;
                this.y = Fish.randomStart().y;
                this.speed = Math.random() * 2 + 1;
            }
        }
    }
    
    static randomStart() {
        return { x: Math.random() > 0.5 ? 1080 * -0.2 : 1080, y: Math.random() * 0.8 * 720 };
    }
    
    static threeStar(name) {
        let start = Fish.randomStart();
        let dir;
        let src;
        if (start.x > 0) {
            dir = -1;
            src = './src/' + name + 'B.png';
        } else {
            dir = 1;
            src = './src/' + name + 'F.png';
        }
        return new this(name.charAt(0).toUpperCase() + name.slice(1) + ' Fish', 3, Fish.getEffects.plusClick3, start.x, start.y, Math.random() * 2 + 1, dir, src);
    }

    static fourStar(name) {
        let start = Fish.randomStart();
        let dir;
        let src;
        if (start.x > 0) {
            dir = -1;
            src = './src/' + name + 'B.png';
        } else {
            dir = 1;
            src = './src/' + name + 'F.png';
        }
        return new this(name.charAt(0).toUpperCase() + name.slice(1) + ' Fish', 4, Fish.getEffects.plusClick4, start.x, start.y, Math.random() * 2 + 1, dir, src);
    }

    static getFishes() {
        let ianStart = Fish.randomStart();
        let ianDir;
        let ianSrc;
        if (ianStart.x > 0) {
            ianDir = -1;
            ianSrc = './src/ianB.png';
        } else {
            ianDir = 1;
            ianSrc = './src/ianF.png';
        }

        let catStart = Fish.randomStart();
        let catDir;
        let catSrc;
        if (catStart.x > 0) {
            catDir = -1;
            catSrc = './src/catfishB.png';
        } else {
            catDir = 1;
            catSrc = './src/catfishF.png';
        }

        let gKoiStart = Fish.randomStart();
        let gKoiDir;
        let gKoiSrc;
        if (gKoiStart.x > 0) {
            gKoiDir = -1;
            gKoiSrc = './src/goldenKoiB.png';
        } else {
            gKoiDir = 1;
            gKoiSrc = './src/goldenKoiF.png';
        }

        let sharkStart = Fish.randomStart();
        let sharkDir;
        let sharkSrc;
        if (sharkStart.x > 0) {
            sharkDir = -1;
            sharkSrc = './src/sharkB.png';
        } else {
            sharkDir = 1;
            sharkSrc = './src/sharkF.png';
        }

        return  {
            
            ian: new Fish('Ian Fish', 5, Fish.getEffects.ianEffect, ianStart.x, ianStart.y, Math.random() * 2 + 1, ianDir, ianSrc),
        
            betta: Fish.threeStar('betta'),
            clown: Fish.threeStar('clown'),
            gold: Fish.threeStar('gold'),
            angel: Fish.threeStar('angel'),
        
            angler: Fish.fourStar('angler'),
            catfish: new Fish('Catfish', 4, Fish.getEffects.plusClick, catStart.x, catStart.y, Math.random() * 2 + 1, catDir, catSrc),
            koi: Fish.fourStar('koi'),
            // blowfish: Fish.fourStar('blowfish'),
        
            goldenKoi: new Fish('Golden Koi', 5, clicker => Fish.getEffects.goldKoiEffect, gKoiStart.x, gKoiStart.y, Math.random() * 2 + 1, gKoiDir, gKoiSrc),
            // mantaray: new Fish('Baby Mantaray', 5, clicker => Fish.getEffects.mantarayEffect(clicker), null, Fish.randomStart().x, Fish.randomStart().y, 1, { F: './src/mantarayF.png', B: './src/mantaryB.png' }),
            shark: new Fish('Baby Shark', 5, Fish.getEffects.sharkEffect, sharkStart.x, sharkStart.y, Math.random() * 2 + 1, sharkDir, sharkSrc),
        
            // ninja: new Fish('Ninja Fish', 6, clicker => Fish.getEffects.ninjaEffect(clicker), Fish.randomStart().x, Fish.randomStart().y, 1, null, { F: './src/ninjaF.png', B: './src/ninjaB.png' }),
        }
    }

    static getEffects() {
        return {

            plusClick3: function(clicker) {
                clicker += 1;
                console.log('object');
            },
            plusClick3: function(clicker) {
                clicker += 3;
            },
            goldKoiEffect: function(clicker) {
        
            },
            mantarayEffect: function(clicker) {
        
            },
            sharkEffect: function(clicker) {
        
            },
            ninjaEffect: function(clicker) {
        
            },
            ianEffect: function(clicker) {
                
            }
        
        
        }
    }
}



export default Fish;