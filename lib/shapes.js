class Shape{builder()
    {
        this.color="";
    }
    setColor(color){this.color=color};
}

class Triangle extends Shape{
    return(){`<polygon points="30,75 50,25 70,75" stroke="black" fill="${this.color}"/>`}
};
class Circle extends Shape{
    return(){`<circle cx="50" cy="50" r="100" stroke="black" stroke-width="3" fill="${this.color}"/>`}
};
class Square extends Shape{
    return(){`<rect width="200" height="200" stroke="black" stroke-width="3" fill="${this.color}"/>`}
};

module.exports={Triangle, Circle, Square};