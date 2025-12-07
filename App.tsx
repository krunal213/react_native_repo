import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
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
    backgroundColor:"red",
    height:100,
    width:100
  },
  view2:{
    backgroundColor:"yellow",
    height:100,
    width:100
  }
})

export default App;
