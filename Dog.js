function Dog(){
    this.name = "Luca"
    Dog.prototype.eat = function(cat){
        this.stomach.push(cat);
    }
}

module.exports = Dog;