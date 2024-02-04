import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import CustomButton from './CustomButton';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    Alert.alert('Alert', 'You tapped the button!');
  };

  const buttonData = [
    { id: '1', title: 'Classic Button', style: styles.classic },
    { id: '2', title: 'Outline Button', style: styles.outline },
    { id: '3', title: 'Gradient Button', style: styles.gradient },
    { id: '4', title: 'Flat Button', style: styles.flat },
    { id: '5', title: 'Rounded Button', style: styles.rounded },
    { id: '6', title: 'Raised Button', style: styles.raised },
    { id: '7', title: 'Invisible Button', style: styles.invisible },
  ];

  const renderButton = ({ item }) => (
    <CustomButton
      onPress={handleButtonPress}
      title={item.title}
      size="sm"
      style={item.style}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buttonData}
        renderItem={renderButton}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
