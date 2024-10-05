import { Vehicle, vehiclesList } from "@/src/data/vehicle";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { VehicleItem } from "./VehicleItem";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // Simulación de carga de datos
  useEffect(() => {
    setVehicles(vehiclesList);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Vehículos</Text>
      <FlatList
        data={vehicles}
        renderItem={({ item }) => <VehicleItem item={item}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
