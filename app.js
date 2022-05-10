const redInput = document.querySelector('#red'),
  greenInput = document.querySelector('#green'),
  blueInput = document.querySelector('#blue'),
  redInputHex = document.querySelector('#red-hex'),
  greenInputHex = document.querySelector('#green-hex'),
  blueInputHex = document.querySelector('#blue-hex'),
  bgColor = document.querySelector('#rgb'),
  slider = document.querySelector('.slider'),
  hexa = document.querySelector('#hexa'),
  bgColorHex = document.querySelector('.color-hex'),
  btnA =  document.querySelector('.btn-1'),
  btnB = document.querySelector('.btn-2'),
  blockA = document.querySelector('.block-1'),
  blockB = document.querySelector('.block-2');
  
  redInput.addEventListener('mousemove', showColor)
  redInput.addEventListener('touchmove', showColor)
  greenInput.addEventListener('mousemove', showColor)
  greenInput.addEventListener('touchmove', showColor)
  blueInput.addEventListener('mousemove', showColor)
  blueInput.addEventListener('touchmove', showColor)
  redInputHex.addEventListener('mousemove' , showValue)
  redInputHex.addEventListener('touchmove' , showValue)
  greenInputHex.addEventListener('mousemove' , showValue)
  greenInputHex.addEventListener('touchmove' , showValue)
  blueInputHex.addEventListener('mousemove' , showValue)
  blueInputHex.addEventListener('touchmove' , showValue)
  window.addEventListener('DOMContentLoaded', showColor)
  window.addEventListener('DOMContentLoaded', showValue)
  btnA.addEventListener('click',() =>{
    document.querySelector('.parah').style = 'display:none;'
    btnA.classList.add('scale');
    btnB.classList.remove('scale');
    btnB.classList.add('position-left')
    btnA.classList.remove('position-right')
    blockA.classList.add('click')
    blockB.classList.remove('click');
  });

  btnB.addEventListener('click',() =>{
    btnB.classList.add('scale');
    btnA.classList.remove('scale');
    btnA.classList.add('position-right')
    btnB.classList.remove('position-left')
    blockB.classList.add('click');
    blockA.classList.remove('click');
  });   
  
  let ranges = document.querySelectorAll('.input');
  ranges = Array.from(ranges);
  ranges.forEach((range)=>{
    addEventListener('mousemove',() => {
      let x = range.value,
        color = 'linear-gradient(90deg ,rgb(230,230,230)' + (x/255)*100 + '%, rgb(150,150,150)' +  (x/255)*100  + '%)'
        range.style.background = color;
    });

    addEventListener('touchmove',() => {
      let x = range.value,
        color = 'linear-gradient(90deg ,rgb(230,230,230)' + (x/255)*100 + '%, rgb(150,150,150)' +  (x/255)*100  + '%)'
        range.style.background = color;
    });
  });
  
function showColor() {
  bgColor.innerHTML = `
   <h3 class="color-text">
   rgb(${redInput.value},${greenInput.value},${blueInput.value})
   </h3>
   `
   bgColor.style = `background:rgb(${redInput.value},${greenInput.value},${blueInput.value})`;
   
   rgbLightness()
}

function showValue(){
  let x=Number(redInputHex.value),
  y=Number(greenInputHex.value),
  z=Number(blueInputHex.value);

  x=x.toString(16),
  y=y.toString(16),
  z=z.toString(16);

  if(x.length == 1){
    x='0'+ x; 
  }
  if(y.length == 1){
    y='0'+ y; 
  }
  if(z.length == 1){
    z='0'+ z; 
  }
 
  bgColorHex.innerHTML = `
   <h3 class="color-text-2">
   #${x}${y}${z}
   </h3>
   `
    bgColorHex.style = `background:#${x}${y}${z};color:#000`
    hexLightness()
}

function rgbLightness(){
  const a = redInput.value,
  b = greenInput.value,
  c = blueInput.value;
  
 let lightness = (1/2 * (Math.max(a,b,c) + Math.min(a,b,c)))/255;
 
  if(lightness >=0.5){
    document.querySelector('.color-text').style = 'color:#000';
    }else{
   document.querySelector('.color-text').style = 'color:#fff';
  }
  
}

function hexLightness(){
  const d = redInputHex.value,
  e = greenInputHex.value,
  f = blueInputHex.value;

  let lightnessHex = (1/2 * (Math.max(d,e,f) + Math.min(d,e,f)))/255;
  if(lightnessHex >= 0.5){
    document.querySelector('.color-text-2').style = 'color:#000';
  }else{
    document.querySelector('.color-text-2').style = 'color:#fff';
  }
}