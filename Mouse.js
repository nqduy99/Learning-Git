function Mouse(name) {
    this.name = name;
    function getName() {
        return this.name;
    }
}

export default Mouse;