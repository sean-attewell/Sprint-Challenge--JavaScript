console.log('==========================Classes==========================')

// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerRefactor {
    constructor(stuff) {
        this.length = stuff.length;
        this.width = stuff.width;
        this.height = stuff.height;
    }
    volume() {
        return this.length * this.width * this.height
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboid2 = new CuboidMakerRefactor({
    length: 4,
    width: 5,
    height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerRefactor {
    constructor(stuff) {
        super(stuff);
    }
    cubeVolume () {
        return Math.pow(this.length, 3)
    }
    cubeSurfaceArea () {
        return 6 * (Math.pow(this.length, 2))
    }
}

const cube = new CubeMaker({
    length: 2,
    width: 2,
    height: 2,
})

console.log(cube.cubeVolume()) // 8
console.log(cube.cubeSurfaceArea()) // 24