import React from 'react';
import { 
            StyleSheet,
            Text,
            View,
            Button,
            Alert,
            ProgressBarAndroid,
            Modal,
            TouchableHighlight,
            ToastAndroid,
            Animated

                            } from 'react-native';




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <FadeInView>
        <Text style={styles.title}>GEOSEISMIC EXPLORER</Text>
       </FadeInView>
        <Text style={styles.subtitle}>Get Realtime Notifications on Sesimic Events</Text>
        <ProgressBarAndroid style={{marginTop: 22}} color="#FFCA28" />        
      </View>
    );
  }
}

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFCA28',
    fontWeight: "900",
    fontSize: 30,
    
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    margin: 12,
  },
});
