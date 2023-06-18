const imgs = document.querySelectorAll('.img');
let modal = document.querySelector('.modal');
let but = document.getElementById('but');

const arr = ['door.png', 'knight.jpg', 'mm.jpg'];

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let s = random(1,3)

function change() {
    console.log(s)
        if (s == this.value) {
            console.log('111')
            this.setAttribute('src', arr[2]);
            window.setTimeout(() => {
              modal.style.display = 'block'  },1500)
        } 
        else { 
            this.setAttribute('src', arr[1])
            window.setTimeout(() => {
                this.setAttribute('src', arr[0])},1000)
                this.setAttribute('height', '300px')
        } 
}

but.addEventListener('click', ()=>{
  window.location.reload();
})

imgs.forEach((el)=> {
  el.addEventListener('click', change);
})
