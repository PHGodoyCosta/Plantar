const divLogo = document.getElementsByName("divLogo")
const divLogoMain = document.getElementsByClassName("divLogoMain")

/*
<div class="verdura" data-id="40238923">
    <img src="../images/alface.jpg" alt="Alface" class="imgVerduras">
    <div class="textoVerdura">
        <h3>Alface</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, voluptates?</p>
    </div>
</div>
*/

for (let c=0;c<divLogo.length;c++) {
    divLogo[c].addEventListener("click", (event) => {
        let link = String(window.location.href).split("/")[2]
        window.location.href = `http://${link}/`
    })
}
for (let c=0;c<divLogoMain.length;c++) {
    divLogoMain[c].addEventListener("click", (event) => {
        let link = String(window.location.href).split("/")[2]
        window.location.href = `http://${link}/`
    })
}