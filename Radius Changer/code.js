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

//find and listen for RECTANGLE nodes
figma.on('selectionchange', () => {
  // If nothing is selected, return
  if (!figma.currentPage.selection.length) return

  // Constants for type/s & radius
  const RECT = "RECTANGLE"
  const RADIUS = 24

  const selection = figma.currentPage.selection
    .filter(node => node.type === RECT)

  if (selection.length) {
    selection.forEach(rect => {
      rect.cornerRadius = RADIUS
    })
  }

  const radiusValues = selection.map(node => node.cornerRadius)
  //passes radius values to a function that sends a message to fron ui 
  sendRadiusInfo(radiusValues)
})

