import React, { useState } from 'react';
import { Text, View, ScrollView, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const news = [
    "Elevador em manutenção",
    "Inspeção às 18h",
    "Capacidade máxima: 8 pessoas",
    "Atualização em andamento",
    "Sistema revisado com sucesso"
  ];

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      <Text style={{ color: darkMode ? '#fff' : '#000', fontSize: 22 }}>
        Atualização em Andamento 🚧
      </Text>

      <View style={styles.row}>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Modo Escuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <ScrollView>
        {news.map((item, i) => (
          <View
            key={i}
            style={{
              backgroundColor: '#ddd', // BUG AQUI (não muda no dark mode)
              padding: 15,
              marginVertical: 5,
              borderRadius: 10
            }}
          >
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  }
});