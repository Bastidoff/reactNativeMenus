import { View,Text, StyleSheet } from "react-native"

const ShopScreens =()=>{
    return(
      <View  style={styles.container}>
        <Text>Tienda</Text>
      </View>
    )
  }



  //nos trajimos también los estilos del App.js, pero lo ideal es tener también un archivo con todos los estilos, esto se hizo por agilidad

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  //hay que exportar para poderlo usar en App.js
  export default ShopScreens;