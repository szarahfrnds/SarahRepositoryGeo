import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Fundo branco para contraste
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fundo branco para consistência
  },
  title: {
    fontSize: 32, // Aumentado para maior destaque
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#E91E63', // Rosa vibrante para destaque
  },
  filterContainer: {
    marginBottom: 20,
    padding: 15,
    borderColor: '#FFC1E3', // Borda rosa clara
    borderWidth: 2,
    shadowColor: '#E91E63', // Sombra rosa
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 45,
    borderColor: '#E91E63', // Borda rosa
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12, // Aumentado para mais espaçamento interno
    color: '#E91E63', // Texto rosa para consistência
  },
  table: {
    flexDirection: 'row',
  },
  tableColumn: {
    marginRight: 20,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E91E63', // Rosa vibrante para destaque
  },
  tableCell: {
    fontSize: 16,
    marginBottom: 8,
    color: '#FF4081', // Texto rosa
  },
});
