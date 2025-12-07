import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ViewComponent(){
    return(
        <SafeAreaView>
            <View style={styles.view1}>

            </View>
            <View style={styles.view2}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view1:{
        height:100,
        width:100,
        backgroundColor:"red"
    },
    view2:{
        height:100,
        width:100,
        backgroundColor:"yellow"
    }
})

export default ViewComponent