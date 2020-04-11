import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import { compose, variant } from "styled-system"

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps"

const Text = styled("span", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "text",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
)

Text.defaultProps = {
  "data-component-id": "typography.text",
  display: "block",
  size: 500,
  color: "text.default",
}

export default Text
