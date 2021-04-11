'use strict';

/**************************** 1st object  ***********************/

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  WorkingHours:[],
  randomCust: [],
  CookiesNum:[],
  TotalCookies: 0,

  generateHours: function (start, hours) { 
    while(this.WorkingHours.length < hours){
      this.WorkingHours.push(start++);
      if(start > 12){
        start = 1;
      }
    } 
  },
  generateRandomNum: function() {  
    for(let i=0; i<this.WorkingHours.length; i++){
      this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  NumOfCookies: function () {
    let N = 0;
    for(let i=0; i < this.randomCust.length; i++){
      N = Math.ceil(this.avgCookies * this.randomCust[i]);
      this.CookiesNum.push(N);
    }
  },
  CookiesSum: function(){
    for(let i=0; i < this.CookiesNum.length; i++){
      this.TotalCookies += this.CookiesNum[i];
    }
  },
  dispaly: function(){
    let parent = document.querySelector('main');
    let section = document.createElement('section');
    section.setAttribute('id',`${this.location}`);
    parent.appendChild(section);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li = null;
    let text = 'am';
    for(let i=0; i < this.WorkingHours.length; i++){
      li = document.createElement('li');
      if(this.WorkingHours[i] === 12){
        text = 'pm';
      }
        li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
        ul.appendChild(li);
    }

    li = document.createElement('li');
    li.textContent = `Total: ${this.TotalCookies} cookies`;
    ul.appendChild(li);
    section.appendChild(ul);
  }
}
Seattle.generateHours(6,14);
Seattle.generateRandomNum();
Seattle.NumOfCookies();
Seattle.CookiesSum();
Seattle.dispaly();

/**************************** 2nd object ***********************/

let Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  WorkingHours:[],
  randomCust: [],
  CookiesNum:[],
  TotalCookies: 0,

  generateHours: function (start, hours) { 
    while(this.WorkingHours.length < hours){
      this.WorkingHours.push(start++);
      if(start > 12){
        start = 1;
      }
    } 
  },
  generateRandomNum: function() {  
    for(let i=0; i<this.WorkingHours.length; i++){
      this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  NumOfCookies: function () {
    let N = 0;
    for(let i=0; i < this.randomCust.length; i++){
      N = Math.ceil(this.avgCookies * this.randomCust[i]);
      this.CookiesNum.push(N);
    }
  },
  CookiesSum: function(){
    for(let i=0; i < this.CookiesNum.length; i++){
      this.TotalCookies += this.CookiesNum[i];
    }
  },
  dispaly: function(){
    let parent = document.querySelector('main');
    let section = document.createElement('section');
    section.setAttribute('id',`${this.location}`);
    parent.appendChild(section);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li = null;
    let text = 'am';
    for(let i=0; i < this.WorkingHours.length; i++){
      li = document.createElement('li');
      if(this.WorkingHours[i] === 12){
        text = 'pm';
      }
        li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
        ul.appendChild(li);
    }

    li = document.createElement('li');
    li.textContent = `Total: ${this.TotalCookies} cookies`;
    ul.appendChild(li);
    section.appendChild(ul);
  }
}
Tokyo.generateHours(6,14);
Tokyo.generateRandomNum();
Tokyo.NumOfCookies();
Tokyo.CookiesSum();
Tokyo.dispaly();


/**************************** 3rd object ***********************/

let Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  WorkingHours:[],
  randomCust: [],
  CookiesNum:[],
  TotalCookies: 0,

  generateHours: function (start, hours) { 
    while(this.WorkingHours.length < hours){
      this.WorkingHours.push(start++);
      if(start > 12){
        start = 1;
      }
    } 
  },
  generateRandomNum: function() {  
    for(let i=0; i<this.WorkingHours.length; i++){
      this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  NumOfCookies: function () {
    let N = 0;
    for(let i=0; i < this.randomCust.length; i++){
      N = Math.ceil(this.avgCookies * this.randomCust[i]);
      this.CookiesNum.push(N);
    }
  },
  CookiesSum: function(){
    for(let i=0; i < this.CookiesNum.length; i++){
      this.TotalCookies += this.CookiesNum[i];
    }
  },
  dispaly: function(){
    let parent = document.querySelector('main');
    let section = document.createElement('section');
    section.setAttribute('id',`${this.location}`);
    parent.appendChild(section);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li = null;
    let text = 'am';
    for(let i=0; i < this.WorkingHours.length; i++){
      li = document.createElement('li');
      if(this.WorkingHours[i] === 12){
        text = 'pm';
      }
        li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
        ul.appendChild(li);
    }

    li = document.createElement('li');
    li.textContent = `Total: ${this.TotalCookies} cookies`;
    ul.appendChild(li);
    section.appendChild(ul);
  }
}
Dubai.generateHours(6,14);
Dubai.generateRandomNum();
Dubai.NumOfCookies();
Dubai.CookiesSum();
Dubai.dispaly();

/**************************** 4th object  ***********************/

let Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  WorkingHours:[],
  randomCust: [],
  CookiesNum:[],
  TotalCookies: 0,

  generateHours: function (start, hours) { 
    while(this.WorkingHours.length < hours){
      this.WorkingHours.push(start++);
      if(start > 12){
        start = 1;
      }
    } 
  },
  generateRandomNum: function() {  
    for(let i=0; i<this.WorkingHours.length; i++){
      this.randomCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  NumOfCookies: function () {
    let N = 0;
    for(let i=0; i < this.randomCust.length; i++){
      N = Math.ceil(this.avgCookies * this.randomCust[i]);
      this.CookiesNum.push(N);
    }
  },
  CookiesSum: function(){
    for(let i=0; i < this.CookiesNum.length; i++){
      this.TotalCookies += this.CookiesNum[i];
    }
  },
  dispaly: function(){
    let parent = document.querySelector('main');
    let section = document.createElement('section');
    section.setAttribute('id',`${this.location}`);
    parent.appendChild(section);

    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li = null;
    let text = 'am';
    for(let i=0; i < this.WorkingHours.length; i++){
      li = document.createElement('li');
      if(this.WorkingHours[i] === 12){
        text = 'pm';
      }
        li.textContent = `${this.WorkingHours[i]}${text}: ${this.CookiesNum[i]} cookies`;
        ul.appendChild(li);
    }

    li = document.createElement('li');
    li.textContent = `Total: ${this.TotalCookies} cookies`;
    ul.appendChild(li);
    section.appendChild(ul);
  }
}
Paris.generateHours(6,14);
Paris.generateRandomNum();
Paris.NumOfCookies();
Paris.CookiesSum();
Paris.dispaly();