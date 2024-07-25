function mostrar(mensaje) {
    document.querySelector("#texto_resultado").value = mensaje;
}

function actualizarPantalla() {
    const elementos = ["#resultado", "#imagen_muñeco_sin_mensaje", "#sin_mensaje", "#solicitud_mensaje"];
    elementos.forEach(id => document.querySelector(id).style.display = "none");
    document.querySelector("#texto_resultado").style.display = "inline-block";
    document.querySelector("#copiar").style.display = "inline-block";
}

function encriptarMensaje() {
    let mensaje = document.querySelector("#ingreso_texto").value;
    let secreto = "";

    if (mensaje && !/[A-Zá-ú]/g.test(mensaje) && mensaje.trim().length) {
        for (let char of mensaje) {
            secreto += char === "a" ? "ai" :
                    char === "e" ? "enter" :
                    char === "i" ? "imes" :
                    char === "o" ? "ober" :
                    char === "u" ? "ufat" : char;
        }
        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#ingreso_texto').value = '';
    } else {
        alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    }
}

function desencriptarMensaje() {
    let mensaje = document.querySelector("#ingreso_texto").value;
    const codigos = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    const letras = ['a', 'e', 'i', 'o', 'u'];

    if (mensaje && !/[A-Zá-ú]/g.test(mensaje) && mensaje.trim().length) {
        codigos.forEach((codigo, index) => mensaje = mensaje.replaceAll(codigo, letras[index]));
        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#ingreso_texto').value = '';
    } else {
        alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    }
}

function copiarTexto() {
    const texto = document.querySelector("#texto_resultado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto.value);
}

document.querySelector("#encriptar").onclick = encriptarMensaje;
document.querySelector("#desencriptar").onclick = desencriptarMensaje;
document.querySelector("#copiar").onclick = copiarTexto;
