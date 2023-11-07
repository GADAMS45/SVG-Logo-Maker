const { Circle } = require("./shapes")

describe('Circle', () =>{
    test('should render an .svg for green circle element', () => {
      const expectedsvg = '<circle cx="150" cy="100" r="80" fill="green"/>';
      const circle = new Circle();
      circle.setColor("green");
    //   const actualSvg = circle.render();
      expect(circle.render()).toEqual(expectedsvg);
    });
})
