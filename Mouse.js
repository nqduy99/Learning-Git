function Mouse(name) {
    this.name = name;
    this.dead = false;
    function getName() {
        return this.name;
    }
}

Mouse.prototype.die = function() {
    this.dead = true;
}

export default Mouse;