class svg{
    constructor(){
        this.backgroundColor="";
        this.text="";
    }
    render(){
        return `<svg width="500" height="500">${this.backgroundColor}${this.text}</svg>`
    };
    setShape(BGColor){this.backgroundColor = BGColor.render()};
    setText(text, color){this.text= `<text x="150" y="125" font-size="80" fill="${color}" text-anchor="middle">${text}</text>`}
}

module.exports = svg;