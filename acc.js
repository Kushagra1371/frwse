let song_no=0;
let cplay=document.getElementById('cplay');
let cpause=document.getElementById('cpause');
let prgbar=document.getElementById('time');
let p=document.getElementById('u');
let song=[
{songname: "Warriyo",path: "1.MP3"},
{songname: "Excuses",path: "2.MP3"},
{songname: "Control",path: "3.MP3"},
{songname: "Lovely",path: "4.MP3"},
{songname: "Whoopty",path: "5.MP3"},
{songname: "Hope",path: "6.MP3"}]
let audio=new Audio('3.MP3');
cplay.addEventListener('click',()=>{
if(audio.paused || audio.currentTime<=0){audio.play();
}})  
cpause.addEventListener('click',()=>{
audio.pause();
})  
audio.addEventListener('timeupdate',()=>
{prg=parseInt((audio.currentTime/audio.duration)*100);
prgbar.value=prg;})
prgbar.addEventListener('change',()=>
{audio.currentTime=((prgbar.value*audio.duration)/100);})
Array.from(document.getElementsByClassName('playit')).forEach((element,i)=>
{
element.addEventListener('click',()=>{
audio.src=song[i].path;
audio.currentTime=0;
audio.play();
p.src="1.PNG";})})