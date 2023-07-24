import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const UsScreen = (props) => {
    const { navigation } = props
    const { route } = props
    const { person1 } = route.params

    const returnTo = () => {
        // navigation.navigate('Home')
        navigation.goBack()
        // navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            <Text>{person1.age}</Text>
            <Button
                title='Return to HomeScreen'
                onPress={() => returnTo()}
            />
        </View>
    )
}

export default UsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})