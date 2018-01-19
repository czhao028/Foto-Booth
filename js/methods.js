function draw(){
    socket.emit("draw", 1);
}
function drawdone(){
    document.getElementById("drawButton").innerHTML = "Awaiting other players' turns"
}
function restart(){
    document.getElementById("score").innerHTML = 0
    document.getElementById("cards").innerHTML = ""
    ace_box = document.getElementById("drawButton");
    ace_box.innerHTML = '<button type = "button" onclick = "draw()">Draw</button></div>'
    socket.emit("restart",1);
}
function joinSecretRoom(){
    d = document.getElementById("secret").value;
    socket.emit("join_room", d);
}
function listall(){
    socket.emit("listall", 1);
    console.log("done");
}
function addone(){
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML)+1
    document.getElementById('drawButton').innerHTML = '<button type = "button" onclick = "draw()">Draw</button>'
}
function eleven(){
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML)+11
    document.getElementById('drawButton').innerHTML = '<button type = "button" onclick = "draw()">Draw</button>'
}