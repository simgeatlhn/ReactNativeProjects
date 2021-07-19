import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    //array of record
    const friends = [
        { name: "Friend1", age: "20" },
        { name: "Friend2", age: "21" },
        { name: "Friend3", age: "22" },
        { name: "Friend4", age: "23" },
        { name: "Friend5", age: "24" },
        { name: "Friend6", age: "25" },
        { name: "Friends7", age: "26" },
        { name: "Friends8", age: "27" },
        { name: "Friends9", age: "28" }

    ];

    return (
        <FlatList
            //FlatList need two prop 
            //1-data
            //2-renderItem like mapping function on react
            //keyExtractor need unique key prop
            //horizontal keyword ü ile friends arrayindeki objeler yan yana sıralanır. horizontal olmazsa alt alta sıralanır.
            //showsHorizontalScrollIndicator={false} scroll bar ın görünür olmasını engeller
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} -Age {item.age}
                    </Text>
                )
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;