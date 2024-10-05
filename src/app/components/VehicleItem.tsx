import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Vehicle } from '../../data/vehicle';

export const VehicleItem : React.FC<{ item: Vehicle }> = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemCode}>{item.code}</Text>
        <View style={[styles.statusBadge, 
          item.status === 'disponible' && styles.availableStatus,
          item.status === 'reservado' && styles.reservedStatus,
          item.status === 'en uso' && styles.enUsoStatus

          
          ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.itemContent}>
        <View style={styles.brandModelContainer}>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.modelText}>{item.model}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.locationText}>
            {item.lat.toFixed(6)}, {item.lon.toFixed(6)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
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
      borderRadius: 10,
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
      marginBottom: 8,
    },
    itemCode: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    statusBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    availableStatus: {
      backgroundColor: '#e6f7ed',
    },
    reservedStatus: {
      backgroundColor: '#fff0e6',
    },
    enUsoStatus: {
      backgroundColor: '#ffc0d3',
    },
    statusText: {
      fontSize: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    itemContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandModelContainer: {
      flexDirection: 'column',
    },
    brandText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#444',
    },
    modelText: {
      fontSize: 14,
      color: '#666',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 12,
      color: '#666',
      marginLeft: 4,
    },
  });