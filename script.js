// pick a tag to do our coding
// let's set up two.js in this tab

//let's create a constant
const container = document.querySelector("section")

//let's add parameters to our drawing area
const params = {
  width: 500,
  height: 500
}

//make a new versionof two.js just for this container
const two = new Two(params)
two.appendTo(container)



//MAKE a rectangle from documentation

// offset path, offset path, width, height
const shape = two.makeRectangle(250, 250, 300, 300);

//change the shape
shape.fill = "#ffff3f"
shape.noStroke();
shape.rotation = Math.PI * 0.2;

//adding motion
//let's listen for any update
// round brackets = put some inputs
// curly brackets  = do something
two.bind("update", function () {
  // shape.rotation = shape.rotation + 0.1

  shape.rotation += 0.03
})


//play animation
two.play()




