let htmlDom = document.getElementsByTagName('html')[0];
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
htmlDom.style.fontSize = htmlWidth /10 + 'px';
window.addEventListener('resize', (e)=>{
    htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth /10 + 'px';
});

let datalist = [];

function Submit () {
    let list = document.getElementsByTagName('input');
   for (let i=0; i<list.length;i++){
       datalist.push(list[i].value)
   }
   console.log(datalist);
}



