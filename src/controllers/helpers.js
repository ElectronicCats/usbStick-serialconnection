import axios from "axios";

export function postData(val1, val2, val3){
    //axios send data
    axios
    .post("http://striverq.borealixsec.com/api/CapturaSPC/RegParams", {
      FormStructureId: "5d97c6de4e976399ece4ae6d",
      ReferenceParameters: [
        { Name: "Foco Encendido", Value: val1 },
        { Name: "Pinza Abierta", Value: val2 },
        { Name: "Pinza Cerrada", Value: val3 }
      ]
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}