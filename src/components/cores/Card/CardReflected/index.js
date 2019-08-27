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
import React, { Component } from "react";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
} from "@core-utils";
import Styles from "./style";
const COLOR = Config.colors();

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  ImageLocal,
} from "@app-components-core/Image";
import {
  Spacer,
} from "@core-components-enhancers";
import Card from "@app-components-intermediaries/Card";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class CardReflected extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderMain() {
    return (
      <Spacer>
        <ImageLocal name="main.card_background" style={ Styles.background }/>

        { this.props.children }
      </Spacer>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Card
        theme={ "Glass" }
        { ... this.props }
      >
        { this._renderMain() }
      </Card>
    );
  }


// ----------------------------------------

}
