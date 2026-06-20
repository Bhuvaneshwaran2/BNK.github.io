
document.getElementById('cutBtn').onclick=()=>{
document.getElementById('ribbon').style.transform='scaleX(0)';
document.getElementById('welcome').innerHTML='🎉 Welcome to the 325th Milestone Celebration!';
};
let c=0;
let t=setInterval(()=>{
c++;
counter.innerHTML=c;
if(c>=325) clearInterval(t);
},15);
