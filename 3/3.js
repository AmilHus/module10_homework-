const websocket = new WebSocket("wss://echo-ws-service.herokuapp.com");

const message_container = document.querySelector(".message-container");
const send_btn = document.querySelector(".send_btn");
const send_geo_btn = document.querySelector(".send-geo_btn");
const input = document.getElementsByTagName("input");

window.onload = () => {
    websocket.onopen = function(){
        console.log("CONNECTED");
    };
    websocket.onerror = function() {
        console.log("ERROR");
    };
    websocket.onmessage = function() {
        sendServerMessage(input[0].value);
      };
}

function sendClientMessage(message) {
    let text = document.createElement("p");
    text.innerHTML = message;
    message_container.appendChild(text);
}

function sendServerMessage(message) {
    let text = document.createElement("p");
    text.innerHTML = message;
    text.style.alignSelf = "start";
    message_container.appendChild(text);
}

send_btn.addEventListener('click', () => {
        const message = input[0].value;
        sendClientMessage(message);
        websocket.send(message);
    }
)

send_geo_btn.addEventListener('click', () =>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          mapLink = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
          sendClientMessage(`<a href=${mapLink}>Гео-локация</a>`);
        });
      }
      else{
          console.log('Невозможно получить ваше местоположение');
      }
})


