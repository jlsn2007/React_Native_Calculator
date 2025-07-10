import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
 
export default function App() {
  // crear los estados para los numeros
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");
 
  // funcion para sumar los numeros
  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const suma = num1 + num2;
    setResultado(suma);
  };

  // funcion para restar los numeros
  const restar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const resta = num1 - num2;
    setResultado(resta);
  };

  // funcion para multiplicar los numeros
  const multiplicar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const multiplicacion = num1 * num2;
    setResultado(multiplicacion);
  };

  // funcion para dividir los numeros
  const dividir = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const division = num1 / num2;
    setResultado(division);
  };

  const cleanDataInput = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora 2A</Text>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Ingrese numero 1: </Text>
        <TextInput placeholder="Escribe un numero" onChangeText={setNumero1} value={numero1}/>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>Ingrese numero 2: </Text>
        <TextInput placeholder="Escribe un numero" onChangeText={setNumero2} value={numero2}/>
      </View>

      {/* Contenedor de botones en fila */}
      <View style={styles.botonContainer}>
        <TouchableOpacity style={styles.botons} onPress={sumar}>
          <Text style={{ color: "#FFF" }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonr} onPress={restar}>
          <Text style={{ color: "#FFF" }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonm} onPress={multiplicar}>
          <Text style={{ color: "#FFF" }}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botond} onPress={dividir}>
          <Text style={{ color: "#000" }}>÷</Text>
        </TouchableOpacity>
      </View>
 
      <Text style={styles.titulo}>Resultado: {resultado}</Text>

      <TouchableOpacity style={styles.botonr} onPress={cleanDataInput}>
          <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Limpiar campos</Text>
        </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  botonContainer: {
    flexDirection: "row", 
    justifyContent: "space-evenly", 
    width: "80%",
    marginTop: 20,
  },
  botons: {
    backgroundColor: "green",
    color: "#fff",
    width: 50,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  botonr: {
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  botonm: {
    backgroundColor: "blue",
    color: "#fff",
    width: 50,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  botond: {
    backgroundColor: "yellow",
    color: "#fff",
    width: 50,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});