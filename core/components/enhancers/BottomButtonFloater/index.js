/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// PACKAGE IMPORTS
// ----------------------------------------
import React, {Component} from "react";
import {
  View,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";
import Styles from "./style";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class BottomButtonFloater extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const buttonCount = this.props.buttonCount ? this.props.buttonCount : 1;

    return (
      <View style={ [
        Styles.container,
        this.props.top ? {paddingTop: Config.base(this.props.top) } : {},
        this.props.style,
        { height: Config.base(7) * buttonCount },
      ] }>
        { this.props.children }
      </View>
    );
  }


// ----------------------------------------

}
