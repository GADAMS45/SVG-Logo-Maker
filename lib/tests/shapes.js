class Shape{
    constructor(){
        this.color="green"
    }
    setColor(color){
        this.color=green
    }
}
class Circle extends Shape{
constructor(color){
    super(color)
}
    render (){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
module.exports = Circle;
