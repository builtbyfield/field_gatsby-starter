import React from "react"
import { Link } from "gatsby"
import { Heading, Text, Wrapper } from "components"

const NotFoundPage = () => (
  <Wrapper>
    <Heading>404: Page Not Found</Heading>
    <Text>This page does not exist!</Text>
    <Text>
      <Link to="/">Return to the homepage</Link>
    </Text>
  </Wrapper>
)

export default NotFoundPage
