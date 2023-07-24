class Shape {
    constructor() {
        this.color="";
    }
    setColor(color){this.color=color};
}

class Triangle extends Shape{
    render () {return `<polygon points="30,150 145,25 270,150" stroke="black" fill="${this.color}"/>`};
}
class Circle extends Shape{
    render(){ return`<circle cx="150" cy="110" r="100" stroke="black" stroke-width="3" fill="${this.color}"/>`}
};
class Square extends Shape{
    render(){return`<rect width="250" height="250" stroke="black" stroke-width="3" fill="${this.color}"/>`}
};

module.exports={Triangle, Circle, Square};