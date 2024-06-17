var statuss = document.querySelector("#stat")
var button = document.querySelector("button")
var body = document.querySelector("body")

var check = 0

button.addEventListener("click", function(){

    if(check == 0){

        statuss.innerHTML = "Friends"
        statuss.style.color = "green"

        button.innerHTML = "Remove Friend"
        button.style.backgroundColor="red"
        button.style.color = "black"

        body.style.backgroundImage = "linear-gradient(lightgreen, gray)"

        check = 1

    }else{

        statuss.innerHTML = "Stranger"
        statuss.style.color = "red"

        button.innerHTML = "Add Friend"
        button.style.backgroundColor="green"
        button.style.color = "black"

        
        body.style.backgroundImage = "linear-gradient(blue, gray)"


        check = 0

    }


})