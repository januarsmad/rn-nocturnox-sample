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
import Styles from "./style";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Card from "@app-components-intermediaries/Card";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class CardBase extends Component {

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
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Card
        theme={ "Base" }
        { ... this.props }
      />
    );
  }


// ----------------------------------------

}
