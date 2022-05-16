
class scriptsLoadPage {
    public settingVariables() {
        return `
        <script>
            let verdura;
            let tabelasVerduras;
            let img;
            let textoVerdura;
            let h3;
            let p;
        </script>
        `
    }

    public addingVerdura(title: String, img: String, url: String) {
        return `
        <script>
            verdura = document.createElement("div")
            tabelasVerduras = document.querySelector("div.tabelasVerduras")
            verdura.setAttribute("class", "verdura")
            verdura.setAttribute("data-id", "${url}")
            img = new Image()
            img.src = "${img}"
            img.setAttribute("class", "imgVerduras")
            textoVerdura = document.createElement("div")
            textoVerdura.setAttribute("class", "textoVerdura")
            h3 = document.createElement("h3")
            h3.innerHTML = "${title}"
            p = document.createElement("p")
            p.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, voluptates?"
            textoVerdura.appendChild(h3)
            textoVerdura.appendChild(p)
            verdura.appendChild(img)
            verdura.appendChild(textoVerdura)
            verdura.addEventListener("click", (event) => {
                window.location.href = "verduras/?id=${url}"
            })
            tabelasVerduras.appendChild(verdura)
        </script>
        `
        /*
            <div class="verdura" data-id="40238923">
                <img src="../images/alface.jpg" alt="Alface" class="imgVerduras">
                <div class="textoVerdura">
                    <h3>Alface</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, voluptates?</p>
                </div>
            </div>
        */
    }

    public addingVerduraDetails(title: String, img: String) {
        return `
        <script>
            let mainContentHeader = document.querySelector("div.mainContentHeader")
            let h1 = document.createElement("h1")
            h1.innerHTML = "${title}"
            img = new Image()
            img.src = "${img}"
            img.setAttribute("class", "imgAlimento")
            mainContentHeader.appendChild(h1)
            mainContentHeader.appendChild(img)
        </script>
        `
    }
}

export { scriptsLoadPage }