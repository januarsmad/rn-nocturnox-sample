/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";

const THEME = Config.theme("Icon.default");


export default {
	main: {
		fontSize: THEME.size,
		// lineHeight: THEME.line,
		// letterSpacing: THEME.spacing,
		color: THEME.color,
	}
};