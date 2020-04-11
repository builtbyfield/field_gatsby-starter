/**
 * Content Block
 *
 * By default, all layout components will render full width;
 * however, most applications will want to limit the width of
 * content on the screen. In order to address this, we provide
 * the ‘ContentBlock’ component that sets a maximum width and
 * centres content horizontally.
 */

import React from "react"

import { Box } from "components"

function ContentBlock({ maxWidth = 960, ...rest }) {
  return (
    <Box
      data-component-id="contentBlock"
      width="100%"
      maxWidth={maxWidth}
      mx="auto"
      {...rest}
    />
  )
}

export default ContentBlock
