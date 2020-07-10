#include <SPI.h>
#include <LoRa.h>
String dato="";
bool flag_g=0;
int incomingByte = 0;   
int counter = 0;
int data_tx[4];
int i0=0;

void transmit(int a,int b, int c){
    LoRa.beginPacket();
    LoRa.write(!a);
    LoRa.write(!b);
    LoRa.write(!c);
    LoRa.endPacket();
    
    LoRa.receive();
    SerialUSB.println("Dato enviado");
  }

/*
void transmit(){
    LoRa.beginPacket();
    LoRa.write(digitalRead(0));
    LoRa.write(digitalRead(1));
    LoRa.write(digitalRead(2));
    LoRa.endPacket();
    SerialUSB.println("Dato enviado");
  }
  */
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  
  Serial.begin(115200);
  while(!Serial);
  
  LoRa.setPins(SS, RFM_RST, RFM_DIO0);
  //LoRa.setPins(17, 16, 4); //SAMD21
  if (!LoRa.begin(915E6)) {
    Serial.println("Fallo en Radio");
    while (1);
  }

  LoRa.onReceive(onReceive);
  LoRa.receive();
  Serial.println("Datos recibidos");
  Serial.println("Input 3 \t Input 2 \t Input 1 \t");
  
}

void loop() {

  if (Serial.available()) {
    digitalWrite(LED_BUILTIN,HIGH);
    while(Serial.available()>0){
        incomingByte = Serial.read();
        data_tx[i0]=incomingByte-48;
        //Serial.println(data_tx[i0]); 
        i0++;
      }
      i0=0; 
      transmit(data_tx[0],data_tx[1], data_tx[2]);
   } 
   digitalWrite(LED_BUILTIN, LOW);
}


void onReceive(int packetSize) {
  digitalWrite(14,HIGH);
  int dato[3];
  int i2=0;
  // received a packet

  // read packet
  for (int i = 0; i < packetSize; i++) {
    //Serial.print((char)LoRa.read());
    dato[i]=LoRa.read();
    Serial.print(!dato[i]);
  }
  Serial.println();
  digitalWrite(14,LOW);
  
  // print RSSI of packet
  //Serial.print("");
  //Serial.println(LoRa.packetRssi());
}
