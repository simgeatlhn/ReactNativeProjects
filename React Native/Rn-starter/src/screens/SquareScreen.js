import React, { useState, useReducer } from 'react'
import { View, Text, Button, StyleSheet, AppState } from 'react-native';
import ColorCounter from '../components/ColorCounter';

//ColorCounter-child , SquareScreen-parent
//color prop u SquareScreen den ColorCounter a geçer

//NOTE:Generally, we create STATE VARIABLES in the MOST PARENT COMPONENT that needs to read or change a state value
//(useState hook u ve state variables parent component da tanımlanmalı)


const COLOR_INCREMENT = 15;
//it is working but very far beneath 0 and very far above 255 value
//1-)if need if block
//2-)tüm renkler için if blok oluşturmak yerine switch ve ternary operator kullanırız => one line code
//3-)useReducer()

//OPTION 3
//two argument
//state = colorToChange , howToChangeStateObject = action  => two argument
const reducer = (state, action) => {
    //state === {red:number,green:number,blue:number}
    //action === {colorToChange:"red" || "green" || "blue",amount :15 || -15}

    //CONVENTION
    //communit convention in reducer
    //not necessarily any meaning to string BUT more meaningful for developers
    //action === {type:"change_red" || "change_green" || "cahnge_blue" , payload:15}

    //...state yerine {red:number,green:number,blue:number} overwrite
    //red:number yerine yeni state.red+action.amount değeri yazılır
    //**never going to do because state never change directly
    //state.red=state.red -15;

    switch (action.type) {
        case "change_red":
            //ternary operatör
            //eğer >255 ya da <0 ise var olan state değerlerini döndürür 
            //değilse değerini artırarak ya da azaltarak döndürür
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };

        case "change_green":
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case "change_blue":
            return state.blue + action.payload > 255 || AppState.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    //SquareScreen needs to read the three different state values
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    //onIncrease,onDecrease,color = props ve ColorCounter da tanılanmalı
    //***callback fumction down to child = onIncrease,onDecrease


    //OPTION 3 - REDUCER - useReducer (useState yerine useReducer kullanılır )
    //you can write runMyReducer instead of dispatch
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
                color="Red" />
            <ColorCounter
                onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
                color="Green" />
            <ColorCounter
                onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
                color="Blue" />

            {/* //JSX  RULE for style - {{}} */}
            {/* //red,green,blue inside of state so we update `rgb(${red})` , `rgb(${state.red})` */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default SquareScreen


    //OPTION 1
    // if (color === "red") {
    //     if (red + change > 255 || red + change < 0) {
    //         return;
    //     } else {
    //         setRed(red + change);
    //     }
    // }

    //function setColor
    // const setColor = (color, change) => {
    //color === "red" , "green", "blue"
    //change =20

    //OPTION 2
    //const setColor(color,change){
    // switch (color) {
    //     case "red":
    //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //         return;
    //     case "green":
    //         green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //         return;
    //     case "blue":
    //         blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //         return;
    //     default:
    //         return;
    // }
    //};

    // <ColorCounter
    //     onIncrease={() => setColor("red", COLOR_INCREMENT)}
    //     onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
    //     color="Red" />

    //     < View
    // style = {{
    //     height: 150,
    //         width: 150,
    //             backgroundColor: `rgb(${red},${green},${blue})`
    // }}
    // />
