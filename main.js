const clicker = document.querySelector(".clicker");
const text = document.querySelector(".text");
const restar = document.querySelector(".reinicio");
const selec1 = document.querySelector(".seleccion1");
const selec2 = document.querySelector(".seleccion2");
const selec3 = document.querySelector(".seleccion3");


       selec1.removeAttribute("hidden")
       selec2.removeAttribute("hidden")
       selec3.removeAttribute("hidden")
       clicker.classList.add("selec")
       selec1.addEventListener("click",One);
       selec2.addEventListener("click",Two);
       selec3.addEventListener("click",Five);


function Five() {
       selec1.setAttribute("hidden","true")
       selec2.setAttribute("hidden","true")
       selec3.setAttribute("hidden","true")
       text.textContent = "¡Prueba Tu Destresa Aqui!"
       clicker.addEventListener("click",contar);
       let contador = -1;
       function contar(){
              contador++;
       }
       function clicks(){
              let cps = contador / 5;
              text.textContent = `Clicks por Segundo: ${cps}.  Clicks Totales: ${contador}.`;
              text.style.color = "red";
              restar.removeAttribute("hidden")
       }
       setTimeout(clicks,5000);
       
       restar.addEventListener("click",reload)
       
       function reload(){
              location.reload()
       }
}
function Two() {
       selec1.setAttribute("hidden","true")
       selec2.setAttribute("hidden","true")
       selec3.setAttribute("hidden","true")
       text.textContent = "¡Prueba Tu Destresa Aqui!"
       clicker.addEventListener("click",contar);
       let contador = -1;
       function contar(){
              contador++;
       }
       function clicks(){
              let cps = contador / 2;
              text.textContent = `Clicks por Segundo: ${cps}.  Clicks Totales: ${contador}.`;
              text.style.color = "red";
              restar.removeAttribute("hidden")
       }
       setTimeout(clicks,2000);
       
       restar.addEventListener("click",reload)
       
       function reload(){
              location.reload()
       }
}
function One() {
       selec1.setAttribute("hidden","true")
       selec2.setAttribute("hidden","true")
       selec3.setAttribute("hidden","true")
       text.textContent = "¡Prueba Tu Destresa Aqui!"
       clicker.addEventListener("click",contar);
       let contador = -1;
       function contar(){
              contador++;
       }
       function clicks(){
              let cps = contador / 1;
              text.textContent = `Clicks por Segundo: ${cps}.  Clicks Totales: ${contador}.`;
              text.style.color = "red";
              restar.removeAttribute("hidden")
       }
       setTimeout(clicks,1000);
       
       restar.addEventListener("click",reload)
       
       function reload(){
              location.reload()
       }
}
