import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Constants } from "expo";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements'

import { DayFragment } from "../components/day_fragment";
import { DayHeader } from "../components/day_header";
import { Items } from "../components/items";

export default class DayScreen extends Component {
  _renderFragment({ fragmentColor, name }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: width,
          height: 80,
          backgroundColor: fragmentColor
        }}
      >
        <MaterialIcons name="wb-sunny" size={28} color="white" />
        <View style={styles.fragmentTextWrapper}>
          <Text style={styles.fragmentText}>{name}</Text>
        </View>
        <MaterialCommunityIcons name="plus" size={34} color="white" />
      </View>
    );
  }

  _renderItems({ items }) {
    return items.map(item => {
      return (
        <View key={item.id} >
        <CheckBox
          title={item.title}
          checked={true}
          iconType='material'
          checkedIcon='check'
          uncheckedIcon='check-box-outline-blank'
          checkedColor='black'
          checked={false}
        />
        </View>
      );
    })
  }

  render() {
    console.log(this.props.dayData.morningData);
    return (
        <View style={{flex: 1}}>
          <DayHeader />
          <ScrollView style={styles.fragmentsContainer}>
            <DayFragment
              _renderFragment={this._renderFragment}
              data={this.props.dayData.morningData}
            />
              <Items 
                _renderItems={this._renderItems} 
                data={this.props.dayData.morningData} 
              />
            <DayFragment
              _renderFragment={this._renderFragment}
              data={this.props.dayData.afternoonData}
            />
              <Items 
                _renderItems={this._renderItems} 
                data={this.props.dayData.afternoonData} 
              />
            <DayFragment
              _renderFragment={this._renderFragment}
              data={this.props.dayData.eveningData}
            />
              <Items 
                _renderItems={this._renderItems} 
                data={this.props.dayData.eveningData} 
              />
          </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  fragmentsContainer: {
    flex: 1,
    width: width,
  },
  fragmentText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  fragmentTextWrapper: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});