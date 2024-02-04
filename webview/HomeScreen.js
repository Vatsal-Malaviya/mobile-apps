import React, { useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import CustomButton from './CustomButton';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
    const [links, setLinks] = useState([
        { title: 'North America', url: 'https://en.wikipedia.org/wiki/North_America', style: styles.classic},
        { title: 'South America', url: 'https://en.wikipedia.org/wiki/South_America', style: styles.outline},
        { title: 'Europe', url: 'https://en.wikipedia.org/wiki/Europe', style: styles.gradient},
        { title: 'Asia', url: 'https://en.wikipedia.org/wiki/Asia', style: styles.flat},
        { title: 'Africa', url: 'https://en.wikipedia.org/wiki/Africa', style: styles.rounded},
        { title: 'Australia', url: 'https://en.wikipedia.org/wiki/Australia_(continent)', style: styles.raised},
        { title: 'Antarctica', url: 'https://en.wikipedia.org/wiki/Antarctica', style: styles.invisible},
    ]);
    
    const renderButton = ({ item }) => (
        <CustomButton
          onPress={() => navigation.navigate('ContinentWebView', { url: item.url })}
          title={item.title}
          size="sm"
          style={item.style}
        />
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Continents</Text>
            <FlatList
                data={links}
                renderItem={renderButton}
                keyExtractor={item => item.title}
            />
        </View>
    );
}

export default HomeScreen;