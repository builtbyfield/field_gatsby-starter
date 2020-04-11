/**
 * Card
 *
 * Rather than nesting content in arbitrary ‘Box’ elements,
 * you may prefer to use standard ‘Card’ elements instead.
 */

import React from "react"

import { Box } from "components"

const Card = props => (
  <Box data-component-id="card" bg="surface.background" {...props} />
)

export default Card
