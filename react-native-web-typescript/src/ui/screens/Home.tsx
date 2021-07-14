import React, {ReactElement, useEffect, useState} from 'react'
import {Platform, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {StackParams} from 'App'
import {Button, Container} from "ui/components";
import {ItemService} from "core/services/ItemService";
import {Item} from "core/domain/model/Item";
import {MyComponent} from 'ui/components/Component';

type NavigationProps = StackNavigationProp<StackParams, 'Home'>

export const Home =(): ReactElement  =>{
    const {navigate} = useNavigation<NavigationProps>()
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        setItems(ItemService.get())
    }, [])

    return (
        <Container>
            <Text>Platform: {Platform.OS}</Text>
            <>
                {items.map((item: Item, index) => (<Text key={index.toString()}>{item.data}</Text>))}
            </>
            <Button title={'Details'} onPress={() => navigate('Details', {data: '🤪'})}/>
            <MyComponent/>
        </Container>
    )
}
