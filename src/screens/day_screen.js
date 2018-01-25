import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Easing,
} from 'react-native';
import { Constants } from 'expo';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';

import { dayData } from '../mock/dayData';
import { DayHeader } from '../components/day_header';
import { StatusBar } from '../components/status_bar';

export default class DayScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Today',
    drawerIcon: ({ tintColor }) => <MaterialIcons name="home" size={20} />,
    gesturesEnabled: false,
  };

  state = {
    morningCollapsed: true,
    afternoonCollapsed: true,
    eveningCollapsed: true,
    allDayCollapsed: true,
  };

  _renderFragment({ fragmentColor, name, id }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this._toggleExpanded(id);
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: width,
            height: 80,
            backgroundColor: fragmentColor,
          }}
        >
          <MaterialIcons name="wb-sunny" size={28} color="white" />
          <View style={styles.fragmentTextWrapper}>
            <Text style={styles.fragmentText}>{name}</Text>
          </View>
          <MaterialCommunityIcons name="plus" size={34} color="white" />
        </View>
      </TouchableHighlight>
    );
  }

  // Open and close fragments based on which fragment is pressed
  _toggleExpanded = id => {
    let fragmentName = `${id}Collapsed`;

    this.setState((prevState, props) => {
      return { [fragmentName]: !prevState[fragmentName] };
    });
  };

  _renderItems({ items }) {
    return items.map(item => {
      return (
        <View key={item.id}>
          <CheckBox
            title={item.title}
            checked={true}
            iconType="material"
            checkedIcon="check"
            uncheckedIcon="check-box-outline-blank"
            checkedColor="black"
            checked={item.complete}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <DayHeader toggleDrawer={this.props.navigation.navigate} />
        <ScrollView style={styles.fragmentsContainer}>
          {this._renderFragment(dayData.allDayData)}
          <Collapsible
            duration={400}
            collapsed={this.state.allDayCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.allDayData)}</View>
          </Collapsible>

          {this._renderFragment(dayData.morningData)}
          <Collapsible
            duration={400}
            collapsed={this.state.morningCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.morningData)}</View>
          </Collapsible>

          {this._renderFragment(dayData.afternoonData)}
          <Collapsible
            duration={400}
            collapsed={this.state.afternoonCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.afternoonData)}</View>
          </Collapsible>

          {this._renderFragment(dayData.eveningData)}
          <Collapsible
            duration={400}
            collapsed={this.state.eveningCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.eveningData)}</View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  fragmentsContainer: {
    flex: 1,
    width: width,
  },
  fragmentText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  fragmentTextWrapper: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
