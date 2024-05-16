let btn = document.getElementById("btn");
console.log(btn);
let img = document.getElementById('img');
console.log(img);
btn.addEventListener('click', () => {
  img.src ='https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940186lbyqngqg1y.png';
  img.style.width = '150px';
  img.style.position = 'sticky';
  img.style.height = '34vh';
});