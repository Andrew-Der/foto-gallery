import React from 'react';
import ReactDOM from 'react-dom'
import "./main.css";
import App from './App'

const title = 'React WHAT with Webpack and Babel SHOOT';

ReactDOM.render(
  App(title),
  document.getElementById('app')
);
module.hot.accept();


// var calculateMonthlyPayment = (principal, years, rate) => {
//     let monthlyRate = 0
//     if (rate) {
//         monthlyRate = rate / 100 / 12;
//     }
//     var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
//     return {principal, years, rate, monthlyPayment, monthlyRate};
// };

// document.getElementById('calcBtn').addEventListener('click', () => {
//     var principal = document.getElementById("principal").value;
//     var years = document.getElementById("years").value;
//     var rate = document.getElementById("rate").value;
//     var {monthlyPayment, monthlyRate} = calculateAmortization(principal, years, rate);
//     document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
//     amortization.forEach((curr) => console.log(curr))
// });

// let calculateAmortization = (principal, years, rate) => {
//     let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
//     let balance = principal;
//     let amortization = [];
//     for (let y=0; y<years; y++) {
//         let interestY = 0;  //Interest payment for year y
//         let principalY = 0; //Principal payment for year y
//         for (let m=0; m<12; m++) {
//             let interestM = balance * monthlyRate;       //Interest payment for month m
//             let principalM = monthlyPayment - interestM; //Principal payment for month m
//             interestY = interestY + interestM;
//             principalY = principalY + principalM;
//             balance = balance - principalM;
//         }
//         amortization.push({principalY, interestY, balance});
//     }
//     return {monthlyPayment, monthlyRate, amortization};
// };