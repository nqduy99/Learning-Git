import Cat from "./Cat.js";
import Mouse from "./Mouse.js";

function Dog(){
    this.name = "Luca"
    Dog.prototype.eat = function(cat){
        this.stomach.push(cat);
    }

    console.log(Mouse.getName())
}

Dog()

export default Dog;