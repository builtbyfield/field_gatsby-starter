/**
 * 💪 (Flex)
 *
 * 💪 is essentially the same as Box except is has flex-box enabled
 * by default. This small addition can reduce mark up in a large
 * project and helps people exploring DOM nodes to more easily
 * pinpoint which elements are flex elements and which are not.
 */

import React from "react"

import { Box } from "components"

const Flex = props => <Box data-component-id="💪" display="flex" {...props} />

export default Flex
