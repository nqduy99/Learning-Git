
function Cat() {
    this.stomach = []
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    console.log('hi')
}

export default Cat;