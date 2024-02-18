import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export default class App extends Component {
  state = {
    results: '',
    grade: '',
  };

  // Updated to accept a grade parameter
  onLoad = async (grade) => {
    this.setState({ results: 'Loading, please wait...', grade: grade });
    const url = `https://2s4b8wlhik.execute-api.us-east-1.amazonaws.com/studentData?grade=${grade}`;
    const response = await fetch(url, { method: 'GET' });
    const results = await response.text();
    this.setState({ results });
  }

  renderButton = (grade) => (
    <TouchableOpacity
      key={grade}
      onPress={() => this.onLoad(grade)}
      style={styles.btn}
    >
      <Text>{grade}</Text>
    </TouchableOpacity>
  );

  render() {
    const { results, grade } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {grade && `Students who received a/an ${grade} grade:`}
        </Text>
        <ScrollView style={styles.preview}>
          <Text>{results}</Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          {['A', 'B', 'C', 'D', 'E'].map(this.renderButton)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
  },
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    maxHeight: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
