import { View, Text, Switch } from "react-native";
import styles from "../../assets/stylesheets/AppearanceStyles";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const Appearance = () => {
    const [selectedTheme, setSelectedTheme] = useState();
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark(previousState => !previousState)
    };

    return (
        <View style={styles.container}>
            <Text>Display</Text>
            <View style={styles.top}>
                <Text>{isDark == true ? 'Light' : 'Dark' }</Text>
                <Switch 
                    onChange={toggleMode}
                    value={isDark}
                    trackColor={{ false: '#767577', true: '#81b0ff'  }} 
                    thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <View>
                <Text> {selectedTheme} </Text>
                <Picker style={styles.top} selectedValue={selectedTheme} onValueChange={(itemValue, itemIndex) => setSelectedTheme(itemValue)}>
                    <Picker.Item style={styles.item} label='System Default' value='System Default' />
                    <Picker.Item style={styles.item} label='Dark' value='Dark' />
                    <Picker.Item style={styles.item} label='Light' value='Light' />
                </Picker>
            </View>
        </View>
    )
}

export default Appearance;