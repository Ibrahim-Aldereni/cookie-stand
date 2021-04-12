'use strict';

/**************************** template ***********************/

let parent = document.getElementById('container');
let table = document.createElement('table');
parent.appendChild(table);

let Instances = [];
function Locations(name,minCust,maxCust,avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.WorkingHours = [];
  this.randomCust = [];
  this.CookiesNum = [];
  this.TotalCookies = 0,
  Instances.push(this);
}

/**************************** prototype methods ***********************/

Locations.prototype.generateHours = function(start, hours){
  while(this.WorkingHours.length < hours){
    this.WorkingHours.push(start++);
    if(start > 12){
      start = 1;
    }
  } 
};

Locations.prototype.generateRandomNum = function(){
  for(let i=0; i<this.WorkingHours.length; i++){
    this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
};

Locations.prototype.NumOfCookies = function(){
  let N = 0;
  for(let i=0; i < this.randomCust.length; i++){
    N = Math.ceil(this.avgCookies * this.randomCust[i]);
    this.CookiesNum.push(N);
  }
};

Locations.prototype.CookiesSum = function(){
  for(let i=0; i < this.CookiesNum.length; i++){
    this.TotalCookies += this.CookiesNum[i];
  }
};

Locations.prototype.render = function(){
  let tr2 = document.createElement('tr');
  table.appendChild(tr2);
  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr2.appendChild(td1);

  let td2 = null;
  for(let i=0; i < this.WorkingHours.length; i++){
    td2= document.createElement('td');
    td2.textContent = this.CookiesNum[i];
    tr2.appendChild(td2);
  }

};

/**************************** Instances ***********************/

let Seattle = new Locations('Seattle',23,65,6.3);
let Tokyo = new Locations('Tokyo',3,24,1.2);
let Dubai = new Locations('Dubai',11,38,3.7);
let Paris = new Locations('Paris',20,38,2.3);
let Lima = new Locations('Lima',2,16,4.6);


// loope methods to all locations:
for(let i=0; i< Instances.length; i++){
  Instances[i].generateHours(6,14);
  Instances[i].generateRandomNum();
  Instances[i].NumOfCookies();
  Instances[i].CookiesSum();
};


/**************************** stand-alone function ***********************/

function HeaderRow() {  
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  let th = document.createElement('th'); 
  tr1.appendChild(th);
  
  let text = 'am';
  for(let i=0; i<Instances[0].WorkingHours.length; i++){
    if(Instances[0].WorkingHours[i] === 12){
      text = 'pm';
    };
    th =document.createElement('th');
    th.textContent = Instances[0].WorkingHours[i] + text;
    tr1.appendChild(th); 
  }
  let th2 = document.createElement('th');
  th2.textContent = 'Daily Location Total';
  tr1.appendChild(th2)
};

HeaderRow()

// loope render method to all locations:
for(let i=0; i< Instances.length; i++){
  Instances[i].render();
}

function FooterRow(){
  let tr3 = document.createElement('tr');
  table.appendChild(tr3);
  let td3 = document.createElement('td');
  td3.textContent = 'Totals';
  tr3.appendChild(td3);

  let td4 = null;
  let sum = 0;
  let total = 0;
  for(let i=0; i<Instances[0].WorkingHours.length; i++){
    sum = 0;
    td4 = document.createElement('td');
    for(let j=0; j<Instances.length; j++){
      sum += Instances[j].CookiesNum[i];
      td4.textContent = sum;
      tr3.appendChild(td4);
      
    }
    total += sum;
  }
  let td5 = document.createElement('td');
  td5.textContent = total;
  tr3.appendChild(td5);

}
FooterRow()






// /**************************** 2nd object ***********************/

// let Tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   WorkingHours:[],
//   randomCust: [],
//   CookiesNum:[],
//   TotalCookies: 0,

//   generateHours: function (start, hours) { 
//     while(this.WorkingHours.length < hours){
//       this.WorkingHours.push(start++);
//       if(start > 12){
//         start = 1;
//       }
//     } 
//   },
//   generateRandomNum: function() {  
//     for(let i=0; i<this.WorkingHours.length; i++){
//       this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   NumOfCookies: function () {
//     let N = 0;
//     for(let i=0; i < this.randomCust.length; i++){
//       N = Math.ceil(this.avgCookies * this.randomCust[i]);
//       this.CookiesNum.push(N);
//     }
//   },
//   CookiesSum: function(){
//     for(let i=0; i < this.CookiesNum.length; i++){
//       this.TotalCookies += this.CookiesNum[i];
//     }
//   },
//   dispaly: function(){
//     let parent = document.querySelector('main');
//     let section = document.createElement('section');
//     section.setAttribute('id',`${this.location}`);
//     parent.appendChild(section);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     section.appendChild(h2);

//     let ul = document.createElement('ul');
//     let li = null;
//     let text = 'am';
//     for(let i=0; i < this.WorkingHours.length; i++){
//       li = document.createElement('li');
//       if(this.WorkingHours[i] === 12){
//         text = 'pm';
//       }
//         li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
//         ul.appendChild(li);
//     }

//     li = document.createElement('li');
//     li.textContent = `Total: ${this.TotalCookies} cookies`;
//     ul.appendChild(li);
//     section.appendChild(ul);
//   }
// }
// Tokyo.generateHours(6,14);
// Tokyo.generateRandomNum();
// Tokyo.NumOfCookies();
// Tokyo.CookiesSum();
// Tokyo.dispaly();


// /**************************** 3rd object ***********************/

// let Dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   WorkingHours:[],
//   randomCust: [],
//   CookiesNum:[],
//   TotalCookies: 0,

//   generateHours: function (start, hours) { 
//     while(this.WorkingHours.length < hours){
//       this.WorkingHours.push(start++);
//       if(start > 12){
//         start = 1;
//       }
//     } 
//   },
//   generateRandomNum: function() {  
//     for(let i=0; i<this.WorkingHours.length; i++){
//       this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   NumOfCookies: function () {
//     let N = 0;
//     for(let i=0; i < this.randomCust.length; i++){
//       N = Math.ceil(this.avgCookies * this.randomCust[i]);
//       this.CookiesNum.push(N);
//     }
//   },
//   CookiesSum: function(){
//     for(let i=0; i < this.CookiesNum.length; i++){
//       this.TotalCookies += this.CookiesNum[i];
//     }
//   },
//   dispaly: function(){
//     let parent = document.querySelector('main');
//     let section = document.createElement('section');
//     section.setAttribute('id',`${this.location}`);
//     parent.appendChild(section);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     section.appendChild(h2);

//     let ul = document.createElement('ul');
//     let li = null;
//     let text = 'am';
//     for(let i=0; i < this.WorkingHours.length; i++){
//       li = document.createElement('li');
//       if(this.WorkingHours[i] === 12){
//         text = 'pm';
//       }
//         li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
//         ul.appendChild(li);
//     }

//     li = document.createElement('li');
//     li.textContent = `Total: ${this.TotalCookies} cookies`;
//     ul.appendChild(li);
//     section.appendChild(ul);
//   }
// }
// Dubai.generateHours(6,14);
// Dubai.generateRandomNum();
// Dubai.NumOfCookies();
// Dubai.CookiesSum();
// Dubai.dispaly();

// /**************************** 4th object  ***********************/

// let Paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   WorkingHours:[],
//   randomCust: [],
//   CookiesNum:[],
//   TotalCookies: 0,

//   generateHours: function (start, hours) { 
//     while(this.WorkingHours.length < hours){
//       this.WorkingHours.push(start++);
//       if(start > 12){
//         start = 1;
//       }
//     } 
//   },
//   generateRandomNum: function() {  
//     for(let i=0; i<this.WorkingHours.length; i++){
//       this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   NumOfCookies: function () {
//     let N = 0;
//     for(let i=0; i < this.randomCust.length; i++){
//       N = Math.ceil(this.avgCookies * this.randomCust[i]);
//       this.CookiesNum.push(N);
//     }
//   },
//   CookiesSum: function(){
//     for(let i=0; i < this.CookiesNum.length; i++){
//       this.TotalCookies += this.CookiesNum[i];
//     }
//   },
//   dispaly: function(){
//     let parent = document.querySelector('main');
//     let section = document.createElement('section');
//     section.setAttribute('id',`${this.location}`);
//     parent.appendChild(section);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     section.appendChild(h2);

//     let ul = document.createElement('ul');
//     let li = null;
//     let text = 'am';
//     for(let i=0; i < this.WorkingHours.length; i++){
//       li = document.createElement('li');
//       if(this.WorkingHours[i] === 12){
//         text = 'pm';
//       }
//         li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
//         ul.appendChild(li);
//     }

//     li = document.createElement('li');
//     li.textContent = `Total: ${this.TotalCookies} cookies`;
//     ul.appendChild(li);
//     section.appendChild(ul);
//   }
// }
// Paris.generateHours(6,14);
// Paris.generateRandomNum();
// Paris.NumOfCookies();
// Paris.CookiesSum();
// Paris.dispaly();

// /**************************** 5th object  ***********************/

// let Lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   WorkingHours:[],
//   randomCust: [],
//   CookiesNum:[],
//   TotalCookies: 0,

//   generateHours: function (start, hours) { 
//     while(this.WorkingHours.length < hours){
//       this.WorkingHours.push(start++);
//       if(start > 12){
//         start = 1;
//       }
//     } 
//   },
//   generateRandomNum: function() {  
//     for(let i=0; i<this.WorkingHours.length; i++){
//       this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
//     }
//   },
//   NumOfCookies: function () {
//     let N = 0;
//     for(let i=0; i < this.randomCust.length; i++){
//       N = Math.ceil(this.avgCookies * this.randomCust[i]);
//       this.CookiesNum.push(N);
//     }
//   },
//   CookiesSum: function(){
//     for(let i=0; i < this.CookiesNum.length; i++){
//       this.TotalCookies += this.CookiesNum[i];
//     }
//   },
//   dispaly: function(){
//     let parent = document.querySelector('main');
//     let section = document.createElement('section');
//     section.setAttribute('id',`${this.location}`);
//     parent.appendChild(section);

//     let h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     section.appendChild(h2);

//     let ul = document.createElement('ul');
//     let li = null;
//     let text = 'am';
//     for(let i=0; i < this.WorkingHours.length; i++){
//       li = document.createElement('li');
//       if(this.WorkingHours[i] === 12){
//         text = 'pm';
//       }
//         li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
//         ul.appendChild(li);
//     }

//     li = document.createElement('li');
//     li.textContent = `Total: ${this.TotalCookies} cookies`;
//     ul.appendChild(li);
//     section.appendChild(ul);
//   }
// }
// Lima.generateHours(6,14);
// Lima.generateRandomNum();
// Lima.NumOfCookies();
// Lima.CookiesSum();
// Lima.dispaly();

