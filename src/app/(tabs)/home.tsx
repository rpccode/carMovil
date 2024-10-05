import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import VehicleList from '../components/VehicleList'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'

const filterOptions = ['Todos', 'Disponibles', 'Reservados', 'Económicos', 'Lujo']

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())
  const [vehicleType, setVehicleType] = useState('')

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShowDatePicker(false)
    setSelectedDate(currentDate)
  }

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time
    setShowTimePicker(false)
    setSelectedTime(currentTime)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vehículos</Text>
        <TouchableOpacity style={styles.reserveButton}>
          <Ionicons name="car" size={14} color="white" />
          <Text style={styles.reserveButtonText}>Reservar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScrollView}>
          {filterOptions.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilterButton
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[
                styles.filterButtonText,
                activeFilter === filter && styles.activeFilterButtonText
              ]}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.dateTimeContainer}>
          <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
            <Ionicons name="calendar-outline" size={14} color="#007AFF" />
            <Text style={styles.datePickerButtonText}>
              {selectedDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowTimePicker(true)}>
            <Ionicons name="time-outline" size={14} color="#007AFF" />
            <Text style={styles.datePickerButtonText}>
              {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.vehicleInput}
          placeholder="Tipo de vehículo"
          value={vehicleType}
          onChangeText={setVehicleType}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      <View style={styles.listContainer}>
        <VehicleList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reserveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reserveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  filtersContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterScrollView: {
    paddingHorizontal: 8,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    backgroundColor: '#f0f0f0',
  },
  activeFilterButton: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 11,
  },
  activeFilterButtonText: {
    color: 'white',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flex: 1,
    marginRight: 6,
  },
  datePickerButtonText: {
    marginLeft: 4,
    color: '#333',
    fontSize: 11,
  },
  vehicleInput: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 8,
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 11,
  },
  listContainer: {
    flex: 1,
  },
})

export default Home