
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { formatDate } from '@/src/utils/formatDate';
import { reservation } from '@/src/data/reservations';
import { getVehicleBrandAndModel } from '@/src/data/vehicle';



export const ReservationItem : React.FC<{ item: reservation }> = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemId}>Reserva #{item.id}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.vehicleText}>Vehículo: {getVehicleBrandAndModel(item.vehicleId)}</Text>
        <Text style={styles.dateText}>Inicio: {formatDate(item.startDate)}</Text>
        <Text style={styles.dateText}>Fin: {formatDate(item.endDate)}</Text>
        <Text style={styles.priceText}>Precio: ${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
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
    itemContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    itemHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    itemId: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    statusBadge: {
      backgroundColor: '#e6f7ed',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    statusText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#00a86b',
      textTransform: 'uppercase',
    },
    itemContent: {
      gap: 4,
    },
    vehicleText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#444',
      marginBottom: 4,
    },
    dateText: {
      fontSize: 14,
      color: '#666',
    },
    priceText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#0066cc',
      marginTop: 8,
    },
  });
