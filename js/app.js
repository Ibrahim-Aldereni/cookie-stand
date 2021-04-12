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
  let subtotal = 0;
  for(let i=0; i < this.WorkingHours.length; i++){
    td2= document.createElement('td');
    td2.textContent = this.CookiesNum[i];
    tr2.appendChild(td2);
    subtotal +=this.CookiesNum[i];
  }

  let td6= document.createElement('td');
  td6.textContent = subtotal;
  tr2.appendChild(td6);

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



