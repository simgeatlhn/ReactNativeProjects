import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//STYLES SHORTCUT => margin , marginVertical , marginHorizontal , padding , paddingVertical , paddingHorizontal , borderWidth

//*PARENT 
//alignItems
//flexDirection
//justifyContent
//*CHILD
//flex
//alignSelf

//View - parent , Text -child

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            {/* //OPTION 1
            <View style={styles.viewTwoStyle} /> */}
            {/* //OPTION 2 */}
            <View styles={styles.viewTwoParent}>
                <View style={styles.viewTwoStyle} />
            </View>
            <View style={styles.viewThreeStyle} />
        </View>

        //EXERCISES
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textOneStyle}>
        //         Child 1
        //     </Text>
        //     <Text style={styles.textTwoStyle}>
        //         Child 2
        //     </Text>
        //     <Text style={styles.textThreeStyle}>
        //         Child 3
        //     </Text>
        // </View>


    )
}

//4+4+2=10  so 10 units total of space. Children 1 and 2 get %40 each  and Child 3 gets %20

const styles = StyleSheet.create({

    parentStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    },
    //OPTION 2
    viewTwoPrent: {
        height: 100,
        justifyContent: "flex-end"
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        top: 50
        //OPTION 1
        // marginTop: 50,
        // alignSelf: "flex-end"
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: "purple"
    }



    //EXERCISES
    // viewStyle: {
    //     borderWidth: 3,
    //     borderColor: "black",
    //     //alignItems: "center",
    //     //flexDirection: "row",
    //     //justifyContent: "space-around",
    //     height: 200
    // },
    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     //flex: 4
    //     //alignSelf: "flex-end"
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: "green",
    //     //flex: 4
    //     //alignSelf: "stretch",
    //     //position: "absolute",
    //     //top: 10
    //     ...StyleSheet.absoluteFillObject
    // },

    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     //flex: 2
    //     left: 10
    // }
})

export default BoxScreen
