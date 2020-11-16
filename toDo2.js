let savers = {theBigSave: 0}

//Add Button ----------------------------------------------------------------------
let saverForm = document.getElementById("saverForm");
let costForm = document.getElementById("costForm");
let goalForm = document.getElementById("goalForm");
let gridBlock = document.getElementById("gridBlock");
let plus = document.getElementById("plus");

plus.addEventListener("click", addSaver);

function addSaver(){
    var saverText = saverForm.value;
    var costText = costForm.value;
    var goalText = goalForm.value;
    newSaverButton(saverText, costText, goalText);
}

function newSaverButton(saverText, costText, goalText) {

    //Creates a nested object
    savers[saverText] = {
        cost : parseFloat(costText),
        totalSaving : 0,
        goal: parseFloat(goalText)
    }

    let saverCost = parseFloat(costText).toFixed(2);

    //Create a new saver
    let newSaver = document.createElement("div");

    //Add the first line in save. e.g. Coffee £3.50
    let nameAndCostText = document.createTextNode(capitalizeFirstLetter(saverText) + "  £" +saverCost);
    newSaver.appendChild(nameAndCostText);
    //Add a break
    let br = document.createElement("br")
    newSaver.appendChild(br)
    //Add the second line of text - Saved: £
    let savedText = document.createTextNode("Saved: £Total");
    newSaver.appendChild(savedText);


    //Assigning class names
    newSaver.classList.add("gridItem");
    newSaver.classList.add(saverText);
 
    //When Clicked increment the total saved by the cost and display 
    newSaver.addEventListener("click", saveCost);
    plus.addEventListener("click", closeForm)

    console.log(savers)

    gridBlock.insertBefore(newSaver, gridBlock.childNodes[0]);
}

// Onclick add savings cost ---------------------------------------------
function saveCost(){
    let name = this.classList[1]

    savers[name].totalSaving += savers[name].cost
    savers.theBigSave += savers[name].cost

    console.log(savers.theBigSave)
    //document.getElementsByClassName(name+"total").innerHTML = saver[name].totalSaving;
    document.getElementById("total").innerHTML = savers.theBigSave.toFixed(2);
  
}

// Always Capitalise the first letter ---------------------------------
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//plus Button
//let plusbutton = document.getElementById("plus");
//let gridBlock = document.getElementsById("gridBlock");
//plusbutton.addEventListener("click", addGridItem);

//function addGridItem(){
//    var gridItem = document.createElement("div");
//    gridItem.classList.add("gridItem");
//    gridBlock.appendChild(gridItem);
//}

/*
document.getElementById("plus").onclick = function () {
    var div = document.createElement('div');
    var divText = document.createTextNode("new");
    div.appendChild(divText);
       div.style.backgroundColor = "black";
       div.style.position = "absolute";
       div.style.left = "50px";
       div.style.top = "50px";
       div.style.height = "10px";
       div.style.width = "10px";

    document.getElementsById('gridBlock').appendChild(div);
};
*/

