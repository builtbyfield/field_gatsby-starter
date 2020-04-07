import React from "react"
import { Link } from "gatsby"
import { Heading, Paragraph, Wrapper } from "components"

const NotFoundPage = () => (
  <Wrapper>
    <Heading size={800}>404: Page Not Found</Heading>
    <Paragraph size={500}>This page does not exist!</Paragraph>
    <Paragraph size={500}>
      <Link to="/">Return to the homepage</Link>
    </Paragraph>
  </Wrapper>
)

export default NotFoundPage
