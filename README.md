Este código permite generar un sorteo de Amigo Secreto donde los participantes ingresan sus nombres y luego se elige uno al azar sin que se repita.

Se ingresan nombres en un campo de texto y se agregan a una lista.
Al presionar el botón de sorteo, se elige un nombre al azar, se elimina de la lista y se muestra en pantalla.
Una vez sorteado, la lista de nombres ingresados desaparece.

Funcionamiento de cada funcion:

agregarAmigo()
Toma el nombre ingresado en el campo de texto.
Verifica que no esté vacío ni repetido.
Lo agrega a la lista y actualiza la interfaz para mostrarlo.

actualizarLista()
Limpia la lista mostrada en pantalla.
Agrega cada nombre ingresado a la lista visible en la página.

sortearAmigo()
Verifica que haya al menos un nombre en la lista.
Elige un nombre al azar y lo elimina de la lista para que no se repita.
Oculta la lista de nombres ingresados.
Muestra el nombre sorteado.

mostrarResultado(elegido)
Limpia cualquier resultado anterior.
Muestra el nombre del amigo secreto elegido en la pantalla.
