'use strict';

/**************************** 1st object / Seattle ***********************/

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
    let h2 = document.createElement('h2');
    h2.textContent = this.location;
    parent.appendChild(h2);

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
    parent.appendChild(ul);

  }
}

Seattle.generateHours(6,14);
Seattle.generateRandomNum();
Seattle.NumOfCookies();
Seattle.CookiesSum();
Seattle.dispaly();



