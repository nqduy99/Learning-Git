import Cat from "./Cat.js";
import Mouse from "./Mouse.js";

function Dog(){
    this.name = "Luca"
    this.stomach = []
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
    console.log('test merge')
}

export default Dog;