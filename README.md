# UsbStick Serial Connection

<a href="https://github.com/sponsors/ElectronicCats">
  <img src="https://electroniccats.com/wp-content/uploads/2020/07/Badge_GHS.png" height="104" />
</a>

Esta es una aplicación de consola que nos permite conectar un dispositivo con lora como el <a href="https://github.com/ElectronicCats/CatWAN_USB_Stick">UsbStick</a> por puerto serial y mandar binarios a otro receptor de lora. Con los binarios que recibe el receptor podemos experimentar con otros dispositivos conectados a la <a href="https://github.com/ElectronicCats/CatWAN_USB_Stick">UsbStick</a> como en este ejemplo que se realizó con una pinza y un foco para poder encender el foco y cerrar la pinza a distancia por lora, también podremos mandar esa informaciòn por medio de una petición ```POST``` a un servidor en específico. 

#### Run Setup

``` bash
# required node version -> 12.18.2 LTS

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

```
 <a href="https://nodejs.org/dist/v12.18.2/node-v12.18.2.pkg">download node -> 12.18.2 LTS</a>
 
#### Initial config

``` js
# selecciona el puerto serial de tu dispositivo lora
# la ruta de el archivo se encuentra dentro de src/server/serialConnection.js en la línea 20
// * Config your port used              {PORT}
export const mySerial = new SerialPort("COM20", {
  //** config baudrate default: 115200 */
  baudRate: 115200,
});

# el nombre del puerto se muestra en la consola en forma de lista al inicio del programa

/*
Server run on port:  3000
available ports
path -> /dev/tty.Bluetooth-Incoming-Port 
*/

# configuración de ruta para el POST de los binarios
# la ruta de el archivo se encuentra dentro de src/controllers/helpers.js en la línea 6

import axios from "axios";

export function postData(val1, val2, val3) {
  // @post data ["set post url"]
  axios
    .post("http://example.com/api", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: val1 },
        { Name: "Pinza Abierta", Value: val2 },
        { Name: "Pinza Cerrada", Value: val3 },
      ],
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

```
#### Funciones de ejemplo del programa 

``` js
/* estas son las funciones que realiza el programa, envía los datos al servidor establecido  
y realiza la función dependiendo de el binario enviado a través el puerto serial */

ControllerData.prototype.postData_onLedCatRelay = () => {
  console.log("ON LED -> POST");
  postData(1,0,0);
};
ControllerData.prototype.postData_offLedCatRelay = () => {
  console.log("OFF LED -> POST");
  postData(0,0,0);  
};
ControllerData.prototype.postData_closeGripper = () => {
  console.log("CLOSE GRIPPER -> POST");
  postData(0,1,0);
};
ControllerData.prototype.postData_openGripper = () => {
  console.log("OPEN GRIPPER -> POST");
  postData(0,0,1);
};
ControllerData.prototype.postData_openGripperAndLedOn = () => {
  console.log("OPEN GRIPPER  AND ON LED-> POST");
  postData(1,0,1);
};
ControllerData.prototype.postData_closeGripperAndLedOn = () => {
  console.log("CLOSE GRIPPER  AND ON LED-> POST");
  postData(1,1,0);
};


```

# License
Electronic Cats invests time and resources providing this open source design, please support Electronic Cats and open-source hardware by purchasing products from Electronic Cats!

Released under an MIT license. See the LICENSE file for more information.
