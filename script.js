const days = document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
function Updatetime(){
    const currerntYear = new Date().getFullYear();
    const newYear =new Date(`august 1 ${currerntYear} 00:00:00`);
    const currentdate =new Date();
    const diff=newYear-currentdate;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);
    days.innerHTML=d;
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?'0'+s:s;

}
setInterval(Updatetime,1000);
