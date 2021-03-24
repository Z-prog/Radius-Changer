// find rectangle nodes
//send mesage to ui of all nodes 
// change radius all round to 24PX as a test 
//shift alt A to cooment out
//option command P to run alst plugin 

figma.showUI(__html__)

// send Message to UI 
const sendRadiusInfo = RadiusValues => {
  figma.ui.postMessage({
    //type: 'selectionchange',
    RadiusValues,
  }) 
}

const getRectangles = selection => {
  const RECT_TYPE = "RECTANGLE"

  return selection 
    .filter(node => node.type === RECT_TYPE)
}

const setRectangleRadius = rectangles => {
  if (!rectangles.length) return
  const RADIUS = 24

  rectangles.forEach(rect => {
    rect.cornerRadius = RADIUS
  })
}

//find and listen for RECTANGLE nodes
figma.on('selectionchange', () => {
  const currentSelection = figma.currentPage.selection
  if (!currentSelection.length) return

  // Find rectangles
  const rectangles = getRectangles(currentSelection)

  // Mutate rectangles
  setRectangleRadius(rectangles)

  if (rectangles.length) {
    const radiusValues = rectangles.map(node => node.cornerRadius)
    //passes radius values to a function that sends a message to fron ui 
    sendRadiusInfo(radiusValues)
  }
})

