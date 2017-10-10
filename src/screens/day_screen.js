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

import { DayFragment } from '../components/day_fragment';
import { DayHeader } from '../components/day_header';
import { Items } from '../components/items';

const dayData = {
  morningData: {
    name: 'Morning',
    fragmentColor: '#4dd0e1',
    weather: 'rain',
    items: [
      {
        id: '09829',
        title: 'Cold shower',
        description: 'Take a cold shower.',
        complete: false,
      },
      {
        id: '3920',
        title: 'Read a book',
        description: 'Read an interesting book.',
        complete: true,
      },
    ],
  },
  afternoonData: {
    name: 'Afternoon',
    fragmentColor: '#ffd54f',
    weather: 'rain',
    items: [
      {
        id: '0945829',
        title: 'Yoga class',
        description: 'Emerge vinyassa class.',
        complete: false,
      },
      {
        id: '0982913',
        title: 'Meditate',
        description: 'Meditate for 15 minutes.',
        complete: true,
      },
      {
        id: '0239829',
        title: 'Work at coffee shop',
        description: 'Do some programming at a coffee shop.',
        complete: false,
      },
    ],
  },
  eveningData: {
    name: 'Evening',
    fragmentColor: '#ff8a65',
    weather: 'rain',
    items: [
      {
        id: '09252829',
        title: 'Cold shower',
        description: 'Take a cold shower.',
        complete: false,
      },
      {
        id: '09811229',
        title: 'Read a book',
        description: 'Read an interesting book.',
        complete: true,
      },
    ],
  },
};

export default class DayScreen extends Component {
  state = {
    morningCollapsed: true,
    afternoonCollapsed: true,
    eveningCollapsed: true,
  };

  _renderFragment({ fragmentColor, name }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this._toggleExpanded(name);
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
  _toggleExpanded = name => {
    let fragmentName = `${name.toLowerCase()}Collapsed`;

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
            checked={false}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DayHeader />
        <ScrollView style={styles.fragmentsContainer}>
          {this._renderFragment(dayData.morningData)}
          <Collapsible
            duration={700}
            collapsed={this.state.morningCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.morningData)}</View>
          </Collapsible>

          {this._renderFragment(dayData.afternoonData)}
          <Collapsible
            duration={700}
            collapsed={this.state.afternoonCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.afternoonData)}</View>
          </Collapsible>

          {this._renderFragment(dayData.eveningData)}
          <Collapsible
            duration={700}
            collapsed={this.state.eveningCollapsed}
            align="center"
            easing={Easing.inOut(Easing.quad)}
          >
            <View>{this._renderItems(dayData.eveningData)}</View>
          </Collapsible>

          {/* <DayFragment
            _renderFragment={this._renderFragment}
            data={dayData.morningData}
          />
          <Items _renderItems={this._renderItems} data={dayData.morningData} />
          <DayFragment
            _renderFragment={this._renderFragment}
            data={dayData.afternoonData}
          />
          <Items
            _renderItems={this._renderItems}
            data={dayData.afternoonData}
          />
          <DayFragment
            _renderFragment={this._renderFragment}
            data={dayData.eveningData}
          />
          <Items _renderItems={this._renderItems} data={dayData.eveningData} /> */}
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
