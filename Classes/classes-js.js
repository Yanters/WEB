// // function makeColor(r, g, b) {
// //     const color = {};
// //     color.r = r;
// //     color.g = g;
// //     color.b = b;
// //     color.rgb = function () {
// //         const { r, g, b } = this;
// //          return `rgb(${r}, ${g}, ${b})`;
// //     };
// //     color.hex = function () {
// //         const { r, g, b } = this;
// //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// //     };
// //     return color;
// // }

// // const firstColor = makeColor(24, 64, 86);
// // firstColor.rgb();
// // firstColor.hex();

// function Color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 50, 60);



class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // console.log(r, g, b)
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }


    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    greet() {
        return `Hi there! I am ${this.name}`;
    }

}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');




/// New examples

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating right now.`
    }
}




class Cat extends Pet {
    constructor(name = 'unknown', age = 0, livesLeft = 9) {
        console.log("Cat's constructor.")
        super(name, age);
        this.lives = livesLeft;
    }
    meow() {
        return `${this.name}: Meow, meow!`
    }
}
class Dog extends Pet {
    bark() {
        return `${this.name}: Woof, woof!`
    }
}



