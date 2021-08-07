const counter = document.querySelector('.counter')
let degree = 0
let lastRenderTime = 0
let id


let enterKey = window.addEventListener('keyup',function(key){
    if (key.keyCode === 13) {
        setMinute ()
  }
})



function setMinute (){      
    let overlay = document.getElementById("overlay")
    overlay.style.setProperty('display', 'none')
    let inputMinutes = document.getElementById('inputMinutes').value

    if (inputMinutes > 0){
        start()
    }else{
        alert('Ha ingresado un valor invalido')
        location.reload()
    }
}

function start() {
    id = requestAnimationFrame(animation);
}

function stop() {

    let overlay = document.getElementById("overlay")
    overlay.style.setProperty('display', 'flex')

    let formSettings = document.getElementById("formSettings")
    formSettings.style.setProperty('display', 'none')

    let message = document.getElementById("message")
    message.innerHTML = 'Tiempo Completado'
    
    let popup = document.getElementById("popup")
    popup.style.setProperty('cursor', 'pointer')
    popup.addEventListener("click",reload => location.reload(), false)

    let enterKey = window.addEventListener('keyup',function(key){
        if (key.keyCode === 13) {
            location.reload()
      }
    })


    cancelAnimationFrame(id)

}

function animation(curretTime){
    start()
    
    const secondsSinceLastFrame = (curretTime - lastRenderTime) / 1000
    let inputMinutes = document.getElementById('inputMinutes').value
    let minutes = parseInt(inputMinutes)
    let time = 360 / (minutes * 60)
    let status = 'running'    
    
    if (secondsSinceLastFrame < 1 / time)

    return
    
    if (degree > 360) {
        
        status = 'complete'        
        console.log(status)
        stop()
       
    }else{
        

        let newCounter = document.createElement("DIV")
        degree++
        newCounter.setAttribute('class', 'counter')
        document.getElementById("clock").appendChild(newCounter)
        newCounter.style.setProperty('--rotation', degree)
        console.log(status)

    }
    
    lastRenderTime = curretTime

}