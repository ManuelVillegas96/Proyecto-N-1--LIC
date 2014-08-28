function impPregs()
{
	
var errores = new Array ();
'----Ingresamos los errores más comunes-----'
errores[0] = "Mi impresora no imprime.";
errores[1] = "Windows no puede encontrar el nuevo hardware.";
errores[2] = "La unidad de CD-ROM no lee mis discos.";
errores[3] = "El escaner no funciona.";
errores[4] = "No aparece nada en la pantalla del monitor.";
errores[5] = "El mouse no responde.";
errores[6] = "El disco duro está lento.";
errores[7] = "La computadora se reinicia automáticamente o se apaga.";
errores[8] = "Se escuchan vibraciones y ruidos dentro del chasís.";
errores[9] = "Mi navegador Web se queda congelado.";
errores[10] = "Mi navegador Web muestra ¡No se puede mostrar la página Web!.";
errores[11] = "La computadora no enciende.";
errores[12] = "Se escuchan pitidos Beep al encender la computadora.";
errores[13] = "La LED de la disquetera está encendida constantemente.";
errores[14] = "No hay sonido en mi computadora.";
errores[15] = "No puedo visualizar Google.";
'---------------------------------------------'
var soluciones =new Array();
'----Ingresamos las soluciones de acuerdo a los errores-----'
soluciones[0] = ["Revisar que la impresora tenga suficiente tinta y papel","Verificar si están los correspondientes controladores de la impresora.","Comprobar que la cola de impresión se encuentra vacía.","Verificar que la impresora está conectada debidamente a la computadora."];
soluciones[1] = ["Verificar que el software está correctamente instalado","Retira el dispositivo que tiene problemas y vuelvelo a conectar utilizando el asistente -Agregar Nuevo Hardware-","",""];
soluciones[2] = ["Verifica que la conexión entre la CD-ROM y la Motherboard está adecuadmente.","Desactiva el Administrador de los dispositivos del CD-ROM en : Panel de control/Administrador del sistema/ CD-ROM.","Revisa el cotrolador si está correctamente instalado.",""];
soluciones[3] = ["Verifica que está correctamente conectada al puerto de la computadora.","Revisa el controlador del escaner.","",""];
soluciones[4] = ["Revisa que la pantalla está encendida y los cables están conectados correctamente.","Revisa que los ajustes de -Contraste- y -Brillo- están configurados correctamente.","Revisa o cambia el cable de vídeo, puede que este sea el problema.",""];
soluciones[5] = ["Verifica que el Mouse está conectado correctamente.","Ve a Inicio/Configuración/Panel de control/Mouse y revisa los controladores del Mouse, alguno de estos debe estar generando problemas.","Limpia el sensor óptico del mouse.",""];
soluciones[6] = ["Has una limpieza de los archivos innecesarios.","Has una revisión del disco duro con -Skandisk-.","",""];
soluciones[7] = ["Revisa que no sea causa de virus, ya que esto puede solucionarse al encontrar el archivo y restaurarlo con el antivirus.","Revisa que no tenga ninguna obstrucción o basura el ventilador del chasís, ya que si es así la computadora se sobrecalentará y sencillamente la computadora se apagará.","",""];
soluciones[8] = ["La posible causa sea que hay algún componentre que ha de estar mal conectado o está fallando, se recomeinda encontrar el dispositivo y cambiarlo instantanemante.","Puede que algún componentecomo la Motherboard o la Fuente de Poder estén mal colocadas dentro del chasís, proceda a colocarlos y asegurarlos adecuadamente.","",""];
soluciones[9] = ["Conviene cerrar el navegador y volver a realizar la navegación.","Si el problema persiste borre los datos del caché y los archivos temporales.","",""];
soluciones[10] = ["Esta causa se puede deber a que usted no está autorizado paara acceder al servidor por Proxy.","Puede que no disponga de un certificado completo y válido, o estár ocupando un usuario de red LAN diferente al del certificado de red.","",""];
soluciones[11] = ["Revise que la computadora se encuentra debidamente conectada.","Si está debidamente conectada puede que el error sea debido a la Fuente, posiblemente esté quemada.","Revise que las tarjetas de memoria RAM estén conectadas debidamente, o si no revisar si son compatibles con la Motherboard.",""];
soluciones[12] = ["Anotar las claves Beep que da la BIOs, ya que según el fabricante estos mensajes son codigos de error dentro de la computadora.","","",""];
soluciones[13] = ["Revisar la conexión de la disquetera con la Motherboard.","Si lo anterior no funciona lo más recomendable es retirar y cambiar el cable de la disquetera.","",""];
soluciones[14] = ["Revise que el cable del parlante esté conectado debidamente en su puerto.","Revisar si el problema es el cable y hacer u debido cambio.","Probar los parlantes en otra computadora y verificar si son estos el problema.",""];
soluciones[15] = ["Posblemente sea causa de los secuestradores de navegadores, estos malware asumen el papel de navegador Web. se recomienda revisar los programas instalados y hacer un limpieza con el antivirus.","Si el problema persiste desinstala el navegador y utiliza el antivirus para eliminar el Malwarebytes que está alojado en tu computadora.","",""];
/*'----------------------------------------------'
'for (var i = 0; i >= errores.length ;  i++) {
	document.write(errores(i));
}'*/
}