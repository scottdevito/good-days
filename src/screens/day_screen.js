import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Constants } from "expo";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements'

import { DayFragment } from "../components/day_fragment";
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
      <View>
        <View style={styles.dayHeader}>
          <MaterialCommunityIcons name="menu" size={34} color="white" />
          <View style={styles.dayHeaderInfo}>
            <Text h4 style={styles.day}>
              Monday
            </Text>
            <Text style={styles.date}>October 3rd</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={34} color="white" />
        </View>
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
        <View style={styles.community}>
          <Text style={styles.communityText}>Community</Text>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  dayHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 75,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#4F4F4F",
    zIndex: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1
  },
  dayHeaderInfo: {
    alignItems: "center",
    justifyContent: "center"
  },
  day: {
    color: "#ffffff",
    fontSize: 22
  },
  date: {
    color: "#ffffff",
    fontSize: 12
  },
  fragmentsContainer: {
    flex: 1,
    width: width,
    paddingVertical: 75
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
  community: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6FCF97",
    width: width
  },
  communityText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18
  }
});
