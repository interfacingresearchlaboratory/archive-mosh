var videoList = [{
    "duration": 565
}, {
    "duration": 1647
}, {
    "duration": 1660
}, {
    "duration": 166
}, {
    "duration": 627
}, {
    "duration": 278
}, {
    "duration": 691
}, {
    "duration": 198
}, {
    "duration": 1400
}, {
    "duration": 38
}, {
    "duration": 266
}, {
    "duration": 137
}, {
    "duration": 89
}, {
    "duration": 143
}, {
    "duration": 150
}, {
    "duration": 997
}, {
    "duration": 208
}, {
    "duration": 165
}, {
    "duration": 31
}, {
    "duration": 268
}, {
    "duration": 268
}, {
    "duration": 10
}]

var wordList = [ {"word": "Sensing"} , {"word": "Feeling"} , {"word": "Twinning"} , {"word": "Ghosting"} , {"word": "Monitoring"} , {"word": "Shadowing"} , {"word": "Connecting"} , {"word": "Inter-Playing"} , {"word": "Inter-Connecting"} , {"word": "Stabilising"} , {"word": "Destabilising"} , {"word": "Centralising"} , {"word": "Decentralising"} , {"word": "Organising"} , {"word": "Archiving"} , {"word": "Trying"} , {"word": "Deciding"} , {"word": "Communicating"} , {"word": "Holding"} , {"word": "Dividing"} , {"word": "Associating"} , {"word": "Processing"} , {"word": "Flowing"} , {"word": "Knowing"} , {"word": "Tethering"} , {"word": "Enmeshing"} , {"word": "Entangling"} , {"word": "Scanning"} , {"word": "Diffusing"} , {"word": "Intensifying"} , {"word": "Cooling"} , {"word": "Warming"} , {"word": "Tooling"} , {"word": "Prototyping"} , {"word": "Commercialising"} , {"word": "Discussing"} , {"word": "Implementing"} , {"word": "Building"} , {"word": "Modelling"} , {"word": "Understanding"} , {"word": "Creating"} , {"word": "Destroying"} , {"word": "Composing"} , {"word": "De-Composing"} , {"word": "Strategising"} , {"word": "Leaving"} , {"word": "Mobilising"} , {"word": "Problematising"} , {"word": "Complying"} , {"word": "Denying"} , {"word": "Analysing"} , {"word": "Hosting"} , {"word": "Simulating"} , {"word": "Freeing"}]

var vid = document.getElementById("video");
var source = document.createElement('source');
var start = document.getElementById("title")
var word = document.getElementById("word")

//Function to select video from archive and add to source
const video = async () => {
    vid.innerHTML=""
    let video = Math.floor(Math.random() * (21 + 1))
    console.log("video", video)
        source.setAttribute('src', `./video/${video}.mp4`)
        source.setAttribute('type', "video/mp4")
        vid.appendChild(source);
        vid.load();
        vid.play();
        return video;
}

const jump = () => {
    start.style.transition = "1s"
    video()
        .then((result)=> {
        vid.style.opacity = 1
        
        //Get timestamp
        let timestamp = Math.floor(Math.random() * (videoList[result].duration + 1))
        vid.currentTime = timestamp;
        //Set clip length
        let timer = Math.floor(Math.random() * (4 + 1))
        setTimeout(jump, timer * 1000)
        })
    }

const storm = () => {
    vid.innerHTML = ""
    let number = Math.floor(Math.random() * (wordList.length))
    word.innerHTML = wordList[number].word
    let timer = Math.floor(Math.random() * (2 + 1))
    setTimeout(storm, timer * 1000)
}

const play = () => {
        var audio = document.getElementById("audio")
        audio.play()
        jump()
        storm()
    }

    start.addEventListener("click", play);