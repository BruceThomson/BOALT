/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, ActivityIndicator, Button, Image} from 'react-native';

import GoogleCast, {CastButton} from 'react-native-google-cast';

import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.videoRef = React.createRef();
  }

  state = {
    fullScreen: false,
  };

  onFullScreen() {
    this.setState({fullScreen: true});
    Orientation.lockToLandscapeLeft();
  }

  onExitFullscreen() {
    this.setState({fullScreen: false});
    Orientation.lockToPortrait();
  }

  onBuffer() {
    return <ActivityIndicator />;
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: this.state.fullScreen ? '100%' : 200}}>
          <Image
            id="image0"
            width="500"
            height="500"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <VideoPlayer
            // ref={this.videoRef}
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            toggleResizeModeOnFullscreen={false}
            onEnterFullscreen={() => this.onFullScreen()}
            onExitFullscreen={() => this.onExitFullscreen()}
            posterResizeMode={'contain'}
            style={{height: 200}}
            onBuffer={this.onBuffer}
          />
          <CastButton style={{width: 30, height: 30}} />
          {!this.state.fullScreen && (
            <Button
              title="Cast"
              onPress={() =>
                this.startCast(
                  'https://vjs.zencdn.net/v/oceans.mp4',
                  'video_image.jpg',
                  'Asap Sample Video',
                  '-',
                  120,
                  0,
                  'video/mp4',
                  'No details',
                )
              }
            />
          )}
        </View>
      </View>
    );
  }
}

//   GoogleCast.castMedia({
//     mediaUrl:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
//     imageUrl:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/images/480x270/BigBuckBunny.jpg',
//     title: 'Big Buck Bunny',
//     subtitle:
//       'A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.',
//     studio: 'Blender Foundation',
//     streamDuration: 596, // seconds
//     contentType: 'video/mp4', // Optional, default is "video/mp4"
//     playPosition: 10, // seconds
//     customData: {
//       // Optional, your custom object that will be passed to as customData to reciever
//       customKey: 'customValue',
//     },
//   })

//   return (
//     <View>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//           <View style={{flex: 1}} >
//           <VideoPlayerComp />
//           </View>

//       </SafeAreaView>
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView:
//   },
// });
