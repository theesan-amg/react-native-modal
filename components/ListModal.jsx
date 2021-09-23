import React, { useState } from 'react'
import { View, Modal, TextInput, StyleSheet, Button } from 'react-native'

export default function ListModal(/*props*/ {isVisible, onClose, lists, setLists}) {
    // const {isVisible} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = () => {
        setLists([...lists, { name, description }]);
        onClose();
    }

    return (
        <Modal
            visible={/*props.*/isVisible}
            onRequestClose={onClose}
            animationType="slide"
        >
            <View style={styles.container}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    placeholder="List name"
                />
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                    placeholder="List description"
                />
                <Button
                    title="Submit"
                    disabled={name.length < 5 || description.length < 5}
                    onPress={onSubmit}
                />
            </View>
        </Modal>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "80%",
        height: 40,
        margin: "auto",
        marginVertical: 5,
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 2
    }
});