import React from 'react';
import { Pressable, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default function ListCard({list, remove}) {
    return (
       
            <Card>
                <Pressable onPress={remove}>
                    <Icon name="close" color="crimson" />
                </Pressable>
                <Card.Title>{list.name}</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 10}}>
                    {list.description}
                </Text>
            </Card>
        
    )
}