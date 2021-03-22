// find rectangle nodes
//send mesage to ui of all nodes 
// change radius all round to 24PX as a test 
//shift alt A to cooment out
//option command P to run alst plugin 

figma.showUI(__html__)


// send Message to UI 
function sendRadiusInfo(RadiusValues){
  figma.ui.postMessage({
    //type: 'selectionchange',
    RadiusValues,
  }) 

 }

//find and listen for RECTANGLE nodes
figma.on('selectionchange', () => {
  //Select
  if (figma.currentPage.selection.length >= 1){
    const selection = figma.currentPage.selection.filter(
      node => node.type === "RECTANGLE")
      
      //check selected radius
      console.log(figma.currentPage.selection[0].cornerRadius)
      //check what type of object it is, rect, circle etc 
      console.log(figma.currentPage.selection)
    //find all radius values
    const RadiusValues = selection.map(node => node.cornerRadius)
    //passes radius values to a function that sends a message to fron ui 
    sendRadiusInfo(RadiusValues)
      
  } 
})



