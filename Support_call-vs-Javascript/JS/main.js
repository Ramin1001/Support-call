"use strict";

let conerChat = document.querySelector('.garbage');

let contentWraper = document.querySelector("#content_wraper");

let input = document.querySelector('.input');

let upul = document.querySelector(".up_ul");


let head = document.querySelector('.head');

let serimg = document.querySelectorAll('.servis_image');

let serbox = document.querySelectorAll('.servis_box');

let telegram=document.querySelector('.telegram');

input.addEventListener("keyup", function (e) {
    if (e.which == 13) {
        AddItem();
    }
});

telegram.addEventListener("click", function () {
        AddItem();
   
});

let openbox=document.querySelector('.large');

openbox.addEventListener("click", function(){
 document.querySelector('.content_wraper.deactive').classList.remove("deactive");
  
})

openbox.addEventListener("click", function(){
document.querySelector('#fixed').classList.add("active");

})






function AddItem() {
    let text = input.value;
    let pattern = /[A-Z]/;

    if (pattern.test(text)) {
        if (text.trim().length > 0) {

           
            let li = document.createElement("li");
            
            li.classList.add("servis_box");

            let service = document.createElement("div");
            service.classList.add("servis_image");

            let output = document.createElement("output");
            output.classList.add("left");
            output.innerText = text;


            li.appendChild(service);
            service.appendChild(output);
            upul.appendChild(li);

            service.addEventListener("click", function () {

                document.querySelector('.garbage.active').classList.remove("active");

                conerChat.addEventListener("click", function () {

                    service.parentElement.remove();
                    document.querySelector('.garbage').classList.add("active");


                })

            })
        }
        input.value = "";
    } else {
        if (text.trim().length > 0) {

            
            let li = document.createElement("li");
            
            li.classList.add("user_box");

            let service = document.createElement("div");
            service.classList.add("user_image");

            let output = document.createElement("output");
            output.classList.add("right");
            output.innerText = text;

            li.appendChild(service);
            service.appendChild(output);
            upul.appendChild(li);

            service.addEventListener("click", function () {

                document.querySelector('.garbage.active').classList.remove("active");

                conerChat.addEventListener("click", function () {

                    service.parentElement.remove();
                    document.querySelector('.garbage').classList.add("active");


                })

            })

        }
        input.value = "";
    }
   
}


 