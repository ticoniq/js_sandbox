// let val;
// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.characterSet;
// val = document.doctype;
// val = document.contentType;
// val = document.domain;
// val = document.URL;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.forms[0].method;
// val = document.forms[0].class;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];
// val = document.links[0].id;

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptArr = Array.from(scripts);

// scriptArr.forEach(function(script){
//   console.log(script.getAttribute('src'));
// })

// console.log(val);

// DOCUMENT GETELEMENT BY ID 
// const taskTitle = document.getElementById('task-title');

// // get things from the element 
// console.log(taskTitle.id);
// console.log(taskTitle.className);

// // change styling 
// console.log(taskTitle.style.background = '#333');
// console.log(taskTitle.style.color = '#fff');
// console.log(taskTitle.style.padding = '5px');
// // console.log(taskTitle.style.display = 'none');

// // Change content
// console.log(taskTitle.textContent = 'Task List');
// console.log(taskTitle.innerText = 'My Task');
// console.log(taskTitle.innerHTML = '<span style="color:red;"> Task List <span>');

// document.querySelector() 
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h2'));

// document.getElementsByClassName() 
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[2].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems)

// document.getElementsByTagName() 
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[2].style.color = 'red';
// lis[3].textContent = 'Hello';

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//   console.log(`${index} ${li.textContent = 'Hello'}`);
// });

// console.log(lis);

// const items =  document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item){
//   console.log(item);
// })

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// odd.forEach(function(liodd) {
//   liodd.style.background = '#eee';
// });

// for(let i = 0; i < even.length; i++){
//   even[i].style.background = '#ccc';
// }

// Get childNode 
// let val;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');

// val = list;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[3].nodeType;

// Node types 
// 1 - Element
// 2 - Attribute 
// 3 - Text
// 8 - Comment
// 9 - Document itself
// 10  - Doctype

// Get children element nodes 
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = 'Hello';

// Get children of children elemt nodes 
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children;

// First child
// val = list.firstChild;
// val = list.firstElementChild;

// Last Child  
// val = list.lastChild;
// val = list.lastElementChild;

// Count child element 
// val = list.childElementCount;

// get parrent node 
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// Get next element node 
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// Get previous element node 
// val = listItem.previousSibling;
// val = listItem.nextElementSibling.previousElementSibling;


// console.log(val);

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.id = 'collection-item';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('Hello World'));
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// document.querySelector('ul.collection').appendChild(li);

// console.log(li)

//Replacing Elements 
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Tasks List'));
// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading, oldHeading);

// // Removing Element 
// const lis = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

// lis[1].remove();
// ul.removeChild(lis[2]);

// console.log(newHeading);

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val; 
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https://google.com');
// link.setAttribute('title', 'google');
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');
// val = link;

// console.log(val);

//Event Listeners & The Event Object

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e) {
//   console.log('Hello World');
//   // e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// function onClick(e) {
  // console.log('onClicked');

  // let val;
  // val = e;

  // event target element 
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   val = e.type;

//   val = e.clientY;
//   val = e.clientX;

//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }

// Mouse Events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`)
//   heading.textContent = `MouseX: ${e.offsetX} - MouseY: ${e.offsetY}`;
//   document.body.style.background = `rgb(${e.offsetX}, ${e.offsetX}, 40)`;
// }

// Keyboard & Input Events
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);
// cut
// taskInput.addEventListener('cut', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// input
// taskInput.addEventListener('input', runEvent);
// change
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//   console.log(`${e.type}`);
  // console.log(`${e.target.value}`);
  // heading.innerText = `${e.target.value}`;

  // e.preventDefault();
// }

// Event Bubbling
// const task = document.querySelector('.card-title').addEventListener('click', function(e){
//   console.log(`Card title: ${e.type}`);
// }); 
// const card = document.querySelector('.card-content').addEventListener('click', function(e){
//   console.log(`Card content: ${e.type}`);
// }); 
// const main = document.querySelector('.card').addEventListener('click', function(e){
//   console.log(`card: ${e.type}`);
// }); 
// const col = document.querySelector('.col').addEventListener('click', function(e){
//   console.log(`Col: ${e.type}`);
// }); 

// Event Delegation 
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
  // console.log(`Item Deleted`);
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log(`Item Deleted`);
  // }

//   if (e.target.parentElement.classList.contains('delete-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

// Local & Session Storage.
// Set localStorage 
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 29);

// sessionStorage.setItem('name', 'Beth');

// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();

// console.log(`My name is ${name} and am ${age} old`);

// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   }else{
//     tasks = JSON.parse(localStorage.getItem('tasks', tasks))
//   }
//   tasks.push(task);
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('Task saved')
//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'))
// tasks.forEach(task => {
//   console.log(task);
// });


// customers load 
// 

// Load data from external API 