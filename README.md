# Proyecto Amigo Secreto - Oracle One 
![alt imagen de Oracle-Alura Latam](https://media.licdn.com/dms/image/D4D12AQFOYyFqevnNlQ/article-cover_image-shrink_720_1280/0/1685181175448?e=2147483647&v=beta&t=CcOZKLtCcNEiPqvXbEDsfMACRR9QY-9VwwV9x_4rjg0)

## Descripción

El presente proyecto tiene por finalidad poner en práctica los conocimientos adquiridos en el curso de lógica de programación brindado por parte del equipo de Alura Latam en conjunto con Oracle en su proyecto de Oracle One Education. La idea del mismo es emplear una simple página web, la cual está construido con HTML y CSS, y se debe ingresar un listado de nombres de personas, las cuales son amigos del usuario. Esa colección de nombre luego aparecen en una lista y al presionar un botón se elije de forma azarosa cuál es ese amigo secreto.

## Funcionalidades

### Funcionalidad N.º 1: Mensaje de error cuando no hay amigos ingresados

Esta funcionalidad se caracteriza por el hecho de que si el usuario final presiona el botón de *Sortear amigo* sin haber agregado ningún nombre de alguno de sus amigos aparecerá un cuadro emergente informando lo siguiente: *No hay amigos para sortear. Por favor, agregue amigos en la lista.*

![imagen del mensaje de error de la funcionalidad Nº 1](./assets/funcionalidad1.png)

### Funcionalidad N.º 2: Mensaje de error asociado a nombres

Para esta funcionalidad, cuando el usuario final ingresa el nombre de cada uno de sus amigos en el input correspondiente, si digita caracteres que no son válidos, es decir aquellos que no se corresponden con el alfabeto latino u otro tipo de caracteres diacríticos, aparece un cuadro emergente indicando lo siguiente: *Por favor, inserte un nombre.*. También dicho mensaje de error aparece cuando el usuario no ha ingresado ningún nombre y presiona la tecla **ENTER** o hace click en el botón **Añadir**.

![imagen del mensaje de error de la funcionalidad N.º 2](./assets/funcionalidad2.png)

### Funcionalidad N.º 3: Modificación de los nombres ingresados

Esta funcionalidad permite elegir mediante un click ese nombre que se desea modificar debido a un error de ingreso en alguno o algunos de sus caracteres. Una vez efectuado el click, sale un cuadro emergente con este mensaje: **¿Desea modificar el nombre de su amigo/a?**, tal como lo muestra la siguiente imagen:

![imagen del mensaje de error funcionalidad N.º 3 - parte a](./assets/funcionalidad3a.png)

Si el usuario hace click en la opción de **Aceptar** el nombre elegido para la modificación pasa a tener sus caracteres correspondientes en color azul y a su derecha aparece el siguiente texto: **-> Modificar este nombre**. Otro cambio que sucede es que se modifica el título de la página que dice: **Digite el nombre de sus amigos** por el siguiente: ** **


