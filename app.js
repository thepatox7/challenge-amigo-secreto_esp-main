// Lista para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); 
    const nombre = input.value.trim(); 

    // Verifica que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Verifica que el nombre no esté repetido en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agrega el nombre a la lista
    amigos.push(nombre);
    input.value = ""; 
    actualizarLista(); 
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    });
}

// Función para sortear un amigo al azar sin repetir
function sortearAmigo() {
    // Verifica que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("Debes ingresar al menos un nombre para realizar el sorteo.");
        return;
    }

    // Selecciona un amigo al azar y lo elimina de la lista para que no se repita
    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos.splice(indice, 1)[0];
    
    // Oculta la lista de nombres ingresados
    document.getElementById("listaAmigos").style.display = "none";
    
    mostrarResultado(elegido); 
}

// Función para mostrar el resultado del sorteo en la interfaz
function mostrarResultado(elegido) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 
    
    const li = document.createElement("li"); 
    li.textContent = `El amigo secreto es: ${elegido}`; 
    listaResultado.appendChild(li); 
}