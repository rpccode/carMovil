import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { formatDate } from '@/src/utils/formatDate';
import { payment } from '@/src/data/payments';
import { getVehicleBrandAndModelByReservation } from '@/src/data/vehicle';

const PaymentItem: React.FC<{item:payment}>= ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemId}>Pago #{item.id}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.reservationText}>Reserva ID: {item.reservationId}</Text>
        <Text style={styles.reservationText}>Vehiculo Reservado: {getVehicleBrandAndModelByReservation(item.reservationId)}</Text>

        <Text style={styles.amountText}>${item.amount.toFixed(2)}</Text>
        <Text style={styles.dateText}>{formatDate(item.date)}</Text>
      </View>
    </TouchableOpacity>
  );
  

export default PaymentItem

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
    reservationText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#444',
    },
    amountText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0066cc',
      marginTop: 4,
    },
    dateText: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
  });