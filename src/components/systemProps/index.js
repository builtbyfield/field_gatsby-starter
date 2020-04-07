/**
 * System Props
 *
 * Here we organize and export styled-system style props
 * into categories that make sense to us.
 */

import * as styledSystem from "styled-system"

export const COMMON = styledSystem.compose(
  styledSystem.display,
  styledSystem.space,
  styledSystem.color
)

export const BORDER = styledSystem.compose(
  styledSystem.border,
  styledSystem.shadow
)

export const LAYOUT = styledSystem.compose(
  styledSystem.width,
  styledSystem.height,
  styledSystem.minWidth,
  styledSystem.minHeight,
  styledSystem.maxWidth,
  styledSystem.maxHeight,
  styledSystem.verticalAlign,
  styledSystem.overflow,
  styledSystem.overflowX,
  styledSystem.overflowY
)

export const TYPOGRAPHY = styledSystem.typography
export const POSITION = styledSystem.position
export const FLEX = styledSystem.flexbox
export const GRID = styledSystem.grid
