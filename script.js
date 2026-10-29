(function(){
var T={u:{name:"Maya",chip:"Core Ultra Series 3",q:"\u201CMy laptop is my studio and my arcade.\u201D",
 day:[["Morning","Edits a 4K video with many windows open."],["Afternoon","Runs an AI tool to speed up her work."],["Evening","Plays a modern game with detailed graphics."],["All day","Moves between them without slowing down."]],
 n:[["16","CPU cores"],["12","graphics cores"],["50","AI engine TOPS"]],f:"Built for demanding creation, gaming, productivity and AI."},
c:{name:"Arjun",chip:"Core Series 3",q:"\u201CMy laptop is my notebook, cinema and office.\u201D",
 day:[["Morning","Takes notes and joins online class."],["Afternoon","Builds a spreadsheet and video-calls a group."],["Evening","Streams a movie with fast, modern Wi-Fi 7."],["All day","Gets smart AI help at a friendlier price."]],
 n:[["6","CPU cores"],["2","graphics cores"],["17","AI engine TOPS"]],f:"Modern computing and right-sized AI for price-smart laptops."}};
var pn=document.getElementById("pn"),tu=document.getElementById("tu"),tc=document.getElementById("tc");
function esc(s){return String(s).replace(/[&<>]/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[m]})}
function show(k){var d=T[k];pn.className="panel "+k+" go-"+k;tu.setAttribute("aria-selected",k=="u");tc.setAttribute("aria-selected",k=="c");pn.setAttribute("aria-labelledby",k=="u"?"tu":"tc");
pn.innerHTML="<h3>"+d.name+" \u00B7 "+d.chip+"</h3><p class='q'>"+d.q+"</p><ul class='tl'>"+d.day.map(function(r,j){return"<li style='--n:"+j+"'><b>"+r[0]+"</b>"+r[1]+"</li>"}).join("")+"</ul><p><b>"+d.f+"</b></p><details><summary>I'm curious about the numbers</summary><div class='nums' style='padding:0 12px 12px'>"+d.n.map(function(n){return"<div><b>up to "+n[0]+"</b>"+n[1]+"</div>"}).join("")+"</div></details>"}
tu.onclick=function(){show("u")};tc.onclick=function(){show("c")};show("u");
document.querySelectorAll("[data-go]").forEach(function(e){function go(){show(e.dataset.go);document.getElementById("tenants").scrollIntoView({behavior:"smooth"})}e.addEventListener("click",go);e.addEventListener("keydown",function(ev){if(ev.key=="Enter"||ev.key==" "){ev.preventDefault();go()}})});
var R=[["Everyday work (browsing, docs, calls)","Smooth and responsive.","Smooth and responsive. Made for it."],["Creative work and gaming","Made for it: up to 12 graphics cores.","Handles light visuals: up to 2 graphics cores."],["AI features","Heavy AI tools: up to 50 TOPS AI engine.","Right-sized AI help: up to 17 TOPS AI engine."],["Many apps at once","Up to 16 CPU cores.","Up to 6 CPU cores, plenty for daily multitasking."],["Memory speed","Up to 9600 MT/s, dual-channel.","Up to 7467 MT/s (LPDDR5X), single-channel."],["Who it suits","Creators, gamers, power users.","Students, families, small teams, value buyers."]];
document.getElementById("cmp").innerHTML=R.map(function(r){return"<details><summary>"+r[0]+"</summary><div class='in'><div class='a'><i>CORE ULTRA SERIES 3</i>"+r[1]+"</div><div class='b'><i>CORE SERIES 3</i>"+r[2]+"</div></div></details>"}).join("");
var Q=[["What do you do most on your laptop?",["Edit video or photos, or play games","Study, browse, write and stream"]],["How demanding are your apps?",["Big files and lots of windows open","A few apps at a time"]],["Do modern games or heavy AI tools matter?",["Yes, they really do","Not really, keep it simple"]],["What matters more when you buy?",["Top performance","A friendly price"]]];
var qz=document.getElementById("qz"),i=0,s={u:0,c:0},msg="";
function ask(){var q=Q[i];qz.innerHTML="<div class='prog'><i style='width:"+(i/Q.length*100)+"%'></i></div><h3>"+q[0]+"</h3>"+q[1].map(function(o,k){return"<button class='opt' data-k='"+k+"'>"+o+"</button>"}).join("")+"<p class='toast'>Question "+(i+1)+" of "+Q.length+"</p>";
qz.querySelectorAll(".opt").forEach(function(b){b.onclick=function(){s[b.dataset.k==0?"u":"c"]++;i++;i<Q.length?ask():done()}})}
function done(){var w=s.u>s.c?"u":s.c>s.u?"c":"b";
var D={u:["18A-U","Core Ultra Series 3","accent-u",["Handles creating, gaming and heavy AI","Keeps many demanding apps going at once","Gives you power to grow into"]],
c:["18A-C","Core Series 3","accent-c",["Sails through study, work and streaming","Brings modern Wi-Fi 7 and built-in AI","Fits a friendlier price"]],
b:["Both keys","Core Ultra Series 3 and Core Series 3","",["Your day suits either chip","Choose Core Ultra Series 3 if performance wins","Choose Core Series 3 if price wins"]]}[w];
var cls=w=="b"?"":w;
qz.innerHTML="<div class='res "+cls+"'><svg class='keyi' viewBox='0 0 84 84' aria-hidden='true'><circle cx='42' cy='42' r='40' fill='"+(w=="c"?"#00a99d":w=="u"?"#0068b5":"#0b1b3f")+"'/><g fill='none' stroke='#ffc72c' stroke-width='5' stroke-linecap='round'><circle cx='30' cy='42' r='9'/><path d='M39 42h24M56 42v9M63 42v7'/></g></svg><p class='sub' style='margin:0'>Your key</p><h3>"+D[0]+"</h3><p><b>"+D[1]+"</b></p><ul class='why' style='--accent:"+(w=="c"?"var(--teal)":"var(--blue)")+"'>"+D[3].map(function(x){return"<li>"+x+"</li>"}).join("")+"</ul><div class='btns'><button class='btn' id='sh'>Share my key</button><button class='btn o' id='rt'>Retake</button></div><p class='toast' id='ts' role='status'></p></div>";
msg="My Building 18A key is "+D[0]+" ("+D[1]+"). Which one is yours?";
document.getElementById("rt").onclick=function(){i=0;s={u:0,c:0};ask()};
document.getElementById("sh").onclick=function(){var t=document.getElementById("ts"),url=location.href.split("#")[0];
try{if(navigator.share){navigator.share({title:"Building 18A",text:msg,url:url}).catch(function(){});return}}catch(e){}
try{navigator.clipboard.writeText(msg+" "+url).then(function(){t.textContent="Copied. Paste it anywhere."},function(){t.textContent=msg})}catch(e){t.textContent=msg}}}
ask();
})();