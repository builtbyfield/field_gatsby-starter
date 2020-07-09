import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { compose, variant } from "styled-system";

import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps";

const Text = styled("span", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "text",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID),
  (props) => [
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
);

Text.defaultProps = {
  "data-component-id": "typography.text",
  display: "block",
  size: 500,
  color: "label.0",
};

export default Text;
