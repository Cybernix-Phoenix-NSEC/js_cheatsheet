// EXAMINE THE DOCUMENT OBJECT  
// console.dir(document);
// console.log(document.domain); 
// console.log(document.URL); 
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textcontent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//  GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.innerText = 'Phoenix';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold'; 
// items[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = 'Hello World';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelecton('.list-group-item:nth-child(2) ');
// secondItem.style.color = 'coral';



//CREATE ELEMENT

// var newHeader = document.createElement('h1');
//  <h1></h1> 


// var textNode = document.createTextNode('Am i audible');
//"Am i audible"


// newHeader.appendChild(textNode);
// <h1> Am i audible </h1>

// document.body.appendChild(newHeader);
//  <body>
//     <h1>Am i audible</h1>
// </body> 




// var btn = document.createElement('button');
// <button></button> //

// btn.innerHTML = "CLick me";
//  <button> Click Me </button> 


// document.body.appendChild(btn);

//  <body> 
//     <button> Click Me </button>
// </body> 

// Add this element to html document body



// var listElement = document.createElement('li') // Create a <list> element
// <li>
// </li>

// var textNode = document.createTextNode('item new')
// "item new"

// listElement.appendChild(textNode)
// <li> item new </li>

// var listClass = document.getElementById('items')
// listClass.appendChild(listElement)

// <ul>
//     <li>item new</li>
// </ul>





// function displayList(event) {
  

//     event.preventDefault();
//     var name = event.target.input.value;
    

//     console.log(name);
// }


// var formSubmit = document.getElementById('form');
// formSubmit.addEventListener('submit', displayList);





