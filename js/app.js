//asignacion de variables

var busquedaHorizontal=0;
var busquedaVertical=0;
var buscarNuevosDulces=0;
var lencolum=["","","","","","",""];
var lenrest=["","","","","","",""];
var maximo=0;
var matriz=0;
var intervalo=0;
var eliminar=0;
var nuevosDulces=0;
var tiempo=0;
var i=0;
var contadorTotal=0;
var espera=0;
var score=0;
var mov=0;
var min=2;
var seg=0;

//se realiza una selección por clase al boton reinicio y se asigna un evento de click con una funcion que contiene la variable i, score y mov. se hace una seleccion por clase al panel score y se modifica su atributo css tamaño 25%. Igualmente se selecciona el panel tablero y mediante show se muestra su contenido, al igual que la clase time.  En la seleccion por etiqueta de score se utiliza html para mostrar el valor de 0 al igual que en el la etiqueta seleccionada mediante movimientos-text.

//El método clearInterval () borra un temporizador configurado con el método setInterval () .


$(".btn-reinicio").click(function(){
	i=0;
	score=0;
	mov=0;
	$(".panel-score").css("width","25%");
	$(".panel-tablero").show();
	$(".time").show();
	$("#score-text").html("0");
	$("#movimientos-text").html("0");
	$(this).html("Reiniciar")
	clearInterval(intervalo);
	clearInterval(eliminar);
	clearInterval(nuevosDulces);
	clearInterval(tiempo);
	min=2;
	seg=0;
	borrartotal();
	intervalo=setInterval(function(){
		desplazamiento()
	},600);
	tiempo=setInterval(function(){
		timer()
	},1000);
});
