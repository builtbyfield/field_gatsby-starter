import React from "react"

import { Box } from "components"

function Footer() {
  return (
    <Box
      data-component-id="footer"
      as="footer"
      height="4px"
      mt={{ _: "layout.5", md: "layout.6" }}
      bg="brand.primary"
    />
  )
}

export default Footer
