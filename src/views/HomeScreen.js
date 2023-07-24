import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = (props) => {
    const { navigation } = props

    const navigateToUs = () => {
        navigation.navigate('Us', information)
    }

    const information = {
        person1: {
            name: 'John',
            age: 20,
            address: 'New York'
        }
    }

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title='Go to UsScreen'
                onPress={() => navigateToUs()}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})