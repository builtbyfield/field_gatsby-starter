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

const Heading = styled("h2", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "headings",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID),
  props => [
    props.ellipsis && {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    props.clamp > 0 && {
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      MozBoxOrient: "vertical",
      WebkitLineClamp: props.clamp,
    },
  ]
)

Heading.defaultProps = {
  "data-component-id": "typography.heading",
  display: "block",
  size: 700,
  color: "label.0",
}

export default Heading
