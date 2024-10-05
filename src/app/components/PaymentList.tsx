import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { payments } from '@/src/data/payments';
import PaymentItem from './PaymentItem';



export default function PaymentList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pagos</Text>
      <FlatList
        data={payments}
        renderItem={({ item }) => <PaymentItem item={item} />}
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