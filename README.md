# Color-RandomJS - Practica para Javascript


<h2>Hola y bienvenido!</h2>

<p> Presento esta practica de iniciacion realizada con JS puro, el proyecto consiste en un generador aleatorio de colores en su formato Hexadecimal y RGB.</p>


![image](https://user-images.githubusercontent.com/101760063/207377447-a8ca5e2e-cd6d-4177-ab0a-323c127584e0.png)
 

<h2> Ahora comenzemos: </h2>
  <p>Como primer paso creamos el generador de colores aleatorios en Hexadecimal, ya que lo encontre un poco mas sencillo que el RGB.</p>
  
  ![image](https://user-images.githubusercontent.com/101760063/207378708-64982a1c-6376-4fa1-9241-a576e90859eb.png)

<p>Creamos un contenedor padre para luego dejar centrado nuestro contenido, y le agregamos una clase y id con el nombre "hex", ahora viene lo complicado.(recordar crear la funcion Onclick para el button, si no al realizar las pruebas con el consol.log no nos arrojara nada, ya me paso a mi xD)</p>

![image](https://user-images.githubusercontent.com/101760063/207379069-27f20dce-9398-4bc6-95db-4002859e4cc6.png)

<p> Creamos una funcion con al cual nos otorne los simbolos hexadecimales iniciando desde el 0 hasta f, que serian los caracteres que se utilizan en el codigo de colores hexadecimales y una que nos entrege el simbolo "#" para colocarlo desde su inicio. </p>

<p> Ahora creamos "for" para que nos entregue de forma aleatoria los digitos de la funcion "simbolos" declarada con anterioridad con un largo maximo de 6 digitos, para luego concatenar con la funcion "#" para asi obtener el color hexadecimal.</p>

![image](https://user-images.githubusercontent.com/101760063/207381294-13fbc4c1-6768-4f13-8c35-79115ab57e5e.png)

<p> Acontinuacion viene lo mas complicado que encontre, pasar de Hexadeimal a RGB, usamos el mismo parametro Hexadecimal que obtuvimos, y creamos 3 constantes la cual agregara unos cuantos bits de diferencia por cada tipo de color </p>

<p> Y finalmente, agregamos la funcion color al background del cuerpo, de esta forma cadavez que usemos el boton para generar un color aleatorio, el estilo del body de nuestra pagina tomara el color correspindiente a la funcion "color".
    Asi como a su vez, al texto de nuestra etiqueta SPAN con la ID "hex" tomara el nombre hexadecimal del color que se elavoro sucediendo lo mismo con el codigo RGB para  la etiqueta SPAN con el ID "rgb"</p>
    
![image](https://user-images.githubusercontent.com/101760063/207404535-5b3c046f-a26b-4eda-8ed8-6326835be5ef.png)

<p> Agregamos un par de estilos, y una media query para un diseño responsivo para dispositivos moviles y tendriamos lista nuestra pagina para generar colores aleatorios
 en Hexadecimal y RGB con Javascript </p> 
