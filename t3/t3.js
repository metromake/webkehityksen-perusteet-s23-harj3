'use strict';

const target = document.querySelector('#target');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
const p5 = document.createElement('p');

p1.textContent = `Browser and version: ${navigator.appName} ${navigator.appVersion}`;
p2.textContent = `Operating system: ${navigator.platform}`;
p3.textContent = `Screen width: ${screen.width}, Screen height: ${screen.height}`;
p4.textContent = `Available screen width: ${screen.availWidth}, Available screen height: ${screen.availHeight}`;
p5.textContent = `date and time: ${new Date().toLocaleDateString('fi-FI', {
  minute: 'numeric',
  hour: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})}`;

target.appendChild(p1);
target.appendChild(p2);
target.appendChild(p3);
target.appendChild(p4);
target.appendChild(p5);
