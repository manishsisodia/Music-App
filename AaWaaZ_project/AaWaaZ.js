console.log("Welcome to Music World")

//variables
let songindex=0
let playbutton=document.getElementById("play")
let gif=document.getElementById("gif")
let progress=document.getElementById("progress")
let previous=document.getElementById("previous")
let next=document.getElementById("next")
let sideplay1=document.getElementById("1st")
let sideplay2=document.getElementById("2nd")
let sideplay3=document.getElementById("3rd")
let sideplay4=document.getElementById("4th")
let sideplay5=document.getElementById("5th")
let sideplay6=document.getElementById("6th")
let sideplay7=document.getElementById("7th")
let neeche=document.getElementById("neeche")


let songlist=["Azeri.mp3","faded.mp3","3Theme.mp3","Theme Of Fasion.mp3","Aaya Na Tu.mp3",
    "Sunta Hai Mera Khuda.mp3","Lambiyaan Si Judaiyaan.mp3"]
let audioElement=new Audio(songlist[songindex]) 

function playmusic()
{
    neeche.innerText=songlist[songindex]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play()
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
       	
}
function seekbar()
{
    //console.log("timeupdate")
    let bar=parseInt((audioElement.currentTime/audioElement.duration)*100)
    //console.log(bar)
    progress.value=bar
}
function updatebar()
{
    audioElement.currentTime=((progress.value*audioElement.duration)/100)
}
function prev()
{
    if(songindex==0)
    {
        songindex=songlist.length-1
    }
    else
    {
        songindex-=1
    }
    neeche.innerText=songlist[songindex]
    console.log(songindex)
    console.log(songlist[songindex])
    if(audioElement.play)
    {
        audioElement.pause()
    }
    audioElement.src=songlist[songindex]
    //audioElement=new Audio(songlist[songindex])
    audioElement.play()
    playbutton.classList.remove("fa-circle-play")
    playbutton.classList.add("fa-circle-pause")
    audioElement.addEventListener("timeupdate",seekbar)
    progress.addEventListener("change",updatebar)
    gif.style.opacity=1
}
function nextt()
{
    if(songindex==songlist.length-1)
    {
        songindex=0
    }
    else
    {
        songindex+=1
    }
    neeche.innerText=songlist[songindex]
    console.log(songindex)
    console.log(songlist[songindex])
    if(audioElement.play)
    {
        audioElement.pause()
    }
    audioElement.src=songlist[songindex]
    //audioElement=new Audio(songlist[songindex])
    audioElement.play()
    playbutton.classList.remove("fa-circle-play")
    playbutton.classList.add("fa-circle-pause")
    audioElement.addEventListener("timeupdate",seekbar)
    progress.addEventListener("change",updatebar)
    gif.style.opacity=1

}
function sidebutton1()
{
    songindex=0
    neeche.innerText=songlist[0]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[0]// audioElement=new Audio(songlist[0])
        audioElement.play()
        sideplay1.classList.remove("fa-circle-play")
        sideplay1.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay1.classList.remove("fa-circle-pause")
        sideplay1.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
    
}
function sidebutton2(event)
{
    songindex=1
    neeche.innerText=songlist[1]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[1]//audioElement=new Audio(songlist[1])
        audioElement.play()
        sideplay2.classList.remove("fa-circle-play")
        sideplay2.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay2.classList.remove("fa-circle-pause")
        sideplay2.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}
function sidebutton3(event)
{
    songindex=2
    neeche.innerText=songlist[2]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[2]//audioElement=new Audio(songlist[2])
        audioElement.play()
        sideplay3.classList.remove("fa-circle-play")
        sideplay3.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay3.classList.remove("fa-circle-pause")
        sideplay3.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}
function sidebutton4(event)
{
    songindex=3
    neeche.innerText=songlist[3]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[3]//audioElement=new Audio(songlist[3])
        audioElement.play()
        sideplay4.classList.remove("fa-circle-play")
        sideplay4.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay4.classList.remove("fa-circle-pause")
        sideplay4.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}
function sidebutton5(event)
{
    songindex=4
    neeche.innerText=songlist[4]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[4]//audioElement=new Audio(songlist[4])
        audioElement.play()
        sideplay5.classList.remove("fa-circle-play")
        sideplay5.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay5.classList.remove("fa-circle-pause")
        sideplay5.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}
function sidebutton6(event)
{
    songindex=5
    neeche.innerText=songlist[5]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[5]
        audioElement=new Audio(songlist[5])
        audioElement.play()
        sideplay6.classList.remove("fa-circle-play")
        sideplay6.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay6.classList.remove("fa-circle-pause")
        sideplay6.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}
function sidebutton7(event)
{
    songindex=6
    neeche.innerText=songlist[6]
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src=songlist[6]//audioElement=new Audio(songlist[5])
        audioElement.play()
        sideplay7.classList.remove("fa-circle-play")
        sideplay7.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        audioElement.addEventListener("timeupdate",seekbar)
        progress.addEventListener("change",updatebar)
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause()
        sideplay7.classList.remove("fa-circle-pause")
        sideplay7.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        playbutton.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
}

//play/pause  audioElement.play()
playbutton.addEventListener("click",playmusic)
audioElement.addEventListener("timeupdate",seekbar)
progress.addEventListener("change",updatebar)
previous.addEventListener("click",prev)
next.addEventListener("click",nextt)
sideplay1.addEventListener("click",sidebutton1)
sideplay2.addEventListener("click",sidebutton2)
sideplay3.addEventListener("click",sidebutton3)
sideplay4.addEventListener("click",sidebutton4)
sideplay5.addEventListener("click",sidebutton5)
sideplay6.addEventListener("click",sidebutton6)
sideplay7.addEventListener("click",sidebutton7)