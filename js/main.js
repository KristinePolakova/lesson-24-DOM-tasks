//task-1
function js_style() {
    text.style.fontSize = "20px";
    text.style.fontFamily = "Monospace";
    text.style.color = "violet";
}

// 2. Write a JavaScript function to get the values of First and Last name 
//of the following form.

function getFormvalue() {
    let firstName = document.querySelector('input[name=fname]').value;
    let lastName = document.querySelector('input[name=lname]').value;
    
    // console.log(firstName);
     //console.log(lastName);
    alert (firstName + " " + lastName);
}
//getFormvalue(); ja liek šo, tad value parādās jau lapai ielādējoties.

//parādās uz 2.sek. arī ar submit value
// function getFormvalue() {
//     let form = document.getElementById("form1");
    
//     for(let i = 0; i < form.length; i++) {
//     alert(form[i].value[0-1]);
//     }
//   }

//PAraugs no W3school
// function getFormvalue()
// {
//   var x=document.getElementById("form1");
//   for (var i=0;i<x.length;i++)
//   {
//    if (x.elements[i].value!='Submit')
//     {  
//       console.log(x.elements[i].value);
//      }  
//    }
// }
// 3. Write a JavaScript program to set the background color of a paragraph.

    // var p = document.getElementById('paragraph');
    // p.style.backgroundColor = "green"; 
 function changeBackground() {
     document.getElementById('paragraph').style.backgroundColor = 'green';
     }

//task-4
//Write a JavaScript function to get the value of the href,
// hreflang, rel, target, and type attributes of the specified link.
function getAttributes() {
    let aLink = document.getElementsByTagName("a")[0];
    
    for(let i = 0; i < aLink.attributes.length; i++) {
    console.log(aLink.attributes[i].name + "=" + '"' + aLink.attributes[i].value +'"');
     }
 }

// 5. Write a JavaScript function to add rows to a table.

//Pēc MDN   
// function insert_Row(){
// var table = document.getElementById('sampleTable');
// var row = table.insertRow(-1);
// for (var i = 0; i < 2; i++) {
//     var cell = row.insertCell(-1);
//     text = 'Row ' + row.rowIndex + ' Cell ' + i;
//     cell.appendChild(document.createTextNode(text));
//   }
// }

function insert_Row() {
   
    let newRow = document.getElementById('sampleTable').insertRow(-1);
    let newCellOne = newRow.insertCell(0);
    let newCellTwo = newRow.insertCell(1);
    newCellOne.innerHTML = "New Cell";
    newCellTwo.innerHTML = "New Cell";
}

// 6. Write a JavaScript function that accept row, column, 
// (to identify a particular cell) and a string to update the content of that cell.
// 1. Create a html table
// 2. Have 3 inputs
// - column number
// - row number
// - text
// 3. button
// Clicking on the button will find the given cell based on column nunmber 
// and set it's contents to what ever is in the input field for text
function insertText(){
    
        var selectedRow = document.getElementById('row').value;
        var selectedCell = document.getElementById('cell').value;
        var inputText = document.getElementById('tableText').value;
        var table = document.getElementById('secondTable').rows[selectedRow];
        table.cells[selectedCell].innerHTML = inputText;
        
}

// 7. Write a JavaScript function that creates a table, 
//accept row, column numbers from the user,
// and input row-column number as content (e.g. Row-0 Column-0) of a cell.
// 1. Create a empty html table (without any rows and columns)
// 2. Have 2 inputs
// - column count
// - row count
// 3. button
// Clicking the button should create the table with the number of rows and columns from the input fields
function createTable() {
    var RowCount = document.getElementById('rowNumber').value;
    var CellCount = document.getElementById('cellNumber').value;
    var table = document.getElementById('thirdTable');

    for (i = 0; i <= RowCount; i++){
        var newRow = table.insertRow(i);
        for (j = 0; j <= CellCount; j++){
            var tableText = newRow.insertCell(j);
            tableText.innerHTML = "Row-" + RowCount + " Column-" + CellCount;
        }
    }
}

// 8. Write a JavaScript program to count and display
//  the items of a dropdown list, in an alert window.
function getOptions() {
    var form = document.getElementById('mySelect');
    var items = "Items- ";
    var formLenght = document.getElementById('mySelect').length;
    items = items + formLenght;
    for( i = 0; i < form.length; i++){
        items = items + " " + form.options[i].text;
    }
    alert(items);
}

// 9. Write a JavaScript program to calculate the volume of a sphere.
// Sample Output of the form will have input field called radius and a button.
//  clicking on that button will calculate the volume of the sphere.

// 10. Write a JavaScript program to display a random image (clicking on a button) from the following list.
// Sample Image information :

// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"

// strādā, bet nav specifiski norādītie attēlu izmēri
// function display_random_image() {
//     var image = new Array();
//     image[0] = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
//     image[1] = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
//     image[2] = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";

//     var number = Math.floor(Math.random()*image.length);
//     return document.getElementById('randomImage').innerHTML='<img src="'+image[number]+'" />';  
// }
function display_random_image() {
var imageArray = [{
    src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width:"240",
    height: "160"
    },
    {
    src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width:"320",
    height: "195"
    },
    {
    src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width:"500",
    height: "343",

    }]
    
    var newArray = [];
    for(i = 0; i < imageArray.length; i++){
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  

    }
    function getRandomNum(min, max)   
    {  
         
        imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
        return newArray[imgNo];  
    }    
    var newImage = getRandomNum(0, newArray.length - 1);  
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    document.body.appendChild(newImage);
}

//11. Write a JavaScript program to get the width and height of the window 
//(any time the window is resized).
window.onload = function(){
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("window");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
}