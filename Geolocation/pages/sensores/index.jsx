import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const Sensores = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tipo, setTipo] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  useEffect(() => {
    fetchSensores();
  }, []);

  const fetchSensores = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      let url = 'https://saraa123.pythonanywhere.com/api/sensores/';

      // Adiciona parâmetros de filtro à URL
      const params = [];
      if (tipo) params.push(`tipo=${tipo}`);
      if (localizacao) params.push(`localizacao=${localizacao}`);
      if (params.length > 0) {
        url += `?${params.join('&')}`;
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setSensores(data);
    } catch (error) {
      console.error('Erro ao buscar os sensores:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyFilters = () => {
    fetchSensores();
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E91E63" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Sensores</Text>

      
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>ID</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.id}</Text>
            ))}
          </View>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>Tipo</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.tipo}</Text>
            ))}
          </View>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>Localização</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.localizacao}</Text>
            ))}
          </View>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>Responsável</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.responsavel}</Text>
            ))}
          </View>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>Longitude</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.longitude}</Text>
            ))}
          </View>
          <View style={styles.tableColumn}>
            <Text style={styles.tableHeader}>Latitude</Text>
            {sensores.map(sensor => (
              <Text key={sensor.id} style={styles.tableCell}>{sensor.latitude}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sensores;
