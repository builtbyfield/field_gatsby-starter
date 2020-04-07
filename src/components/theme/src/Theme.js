/**
 * Theme
 *
 * Here we define the Theme that is used throughout the site.
 * Each file refers to a specific area of concern in the site
 * and brand specifications and comes directly from the design
 * files as often as possible.
 *
 * Theme properties can be absorbed by most components when
 * referring to breakpoints, colors, typographic elements, and
 * wherever layout spacing is used.
 */

// Media query breakpoints
import breakpoints from "./breakpoints"

// Color
import colors from "./colors"

// Spacing
import space from "./space"

// Typography
import fonts from "./fonts"
import headings from "./headings"
import text from "./text"
import paragraph from "./paragraph"

export default {
  breakpoints,
  colors,
  fonts,
  headings,
  paragraph,
  space,
  text,
}
