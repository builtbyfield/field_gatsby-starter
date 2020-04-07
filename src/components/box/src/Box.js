/**
 * 📦 (Box)
 *
 * 📦 serves as the foundational building block for almost every other component.
 * We inject a number of style props from styled-system into a div allowing us to
 * quickly and easily manipulate CSS properties without writing CSS classes for
 * every definition.
 *
 * This approach also gives us easy access to our Theme which offers us the ability
 * to consistently reference spacing, fonts, colors, breakpoints, and other features
 * with less mark up.
 *
 * The 📦 method has been popularized by major companies such as Uber and Segment,
 * and follows some of the same methodologies that can be found in Apple's Swift
 * coding language and others.
 */

import styled from "@emotion/styled"
// shouldForwardProp helps make sure style props do not get rendered to the DOM.
import shouldForwardProp from "@styled-system/should-forward-prop"
// compose combines multiple style prop functions into one.
import { compose } from "styled-system"

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps"

const Box = styled("div", { shouldForwardProp })(
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
)

Box.defaultProps = {
  "data-component-id": "📦",
}

export default Box
