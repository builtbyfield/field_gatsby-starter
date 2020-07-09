import React from "react"
import { Link } from "gatsby"
import { Box, Flex, HStack, Icon, Text, Wrapper } from "components"

function Header() {
  return (
    <Box data-component-id="header" as="header">
      <Box height="4px" mb={{ _: "layout.3", md: "layout.4" }} bg="fill.0" />
      <Wrapper>
        <Flex justifyContent="space-between">
          <HStack align="center" space="layout.1">
            <Link href="/" passHref>
              <Box as="a" mt="-2px">
                <Box
                  as="svg"
                  viewBox="0 0 44 17"
                  display="block"
                  width={(44 / 17) * 16}
                  height={16}
                  color="label.0"
                >
                  <title>Field</title>
                  <path
                    d="M4.6 9.32h2.52c.88 0 1.16.64 1.36 1.88h.6V6.68h-.6C8.28 7.92 8 8.56 7.12 8.56H4.6V2.68h2.88c1.48 0 2.22.64 3.04 2.82h.46l-.08-3.54H.56v.6c1.44.18 1.68.3 1.68 1.42v10c0 1.12-.24 1.24-1.68 1.42v.6h6.48v-.64c-1.92-.14-2.44-.4-2.44-1.58V9.32zm10.728-4h-.32l-3.18 1.04v.28l1.26.7v7.14c0 .74-.32.88-1.32.94V16h4.88v-.58c-1-.06-1.32-.2-1.32-.94V5.32zm-1.18-1.42c.82 0 1.44-.64 1.44-1.4 0-.78-.62-1.42-1.44-1.42a1.4 1.4 0 00-1.42 1.42c0 .76.6 1.4 1.42 1.4zm7.985 1.42c-2.66 0-4.7 2.38-4.7 5.72 0 2.94 1.76 5.16 4.64 5.16 2.18 0 3.6-1.3 4.08-3.16l-.26-.14c-.72 1.08-1.6 1.7-3 1.7-2.02 0-3.56-1.74-3.44-4.8h6.58v-.42c0-2.32-1.34-4.06-3.9-4.06zm-.18.68c1.44 0 2 1.32 2 3.16h-4.44c.16-1.8 1-3.16 2.44-3.16zM30.405.34h-.34l-3.16.98v.3l1.26.68v12.18c0 .74-.32.88-1.32.94V16h4.88v-.58c-1-.06-1.32-.2-1.32-.94V.34zm7.206 5.68c1.28 0 2.12 1.02 2.12 2.74v5.12c-.52.54-1.2.82-2.04.82-1.98 0-3.04-1.88-3.04-4.32 0-2.62 1.14-4.36 2.96-4.36zm2.12-3.72v3.78c-.5-.46-1.28-.74-2.26-.74-2.82 0-4.98 2.22-4.98 5.92 0 2.92 1.58 4.94 4.02 4.94 1.42 0 2.42-.76 3.22-1.86l-.08 1.86h.4l3.32-.72v-.52l-.52-.04c-.84-.08-.88-.26-.88-.94V.34h-.32l-3.18.98v.3l1.26.68z"
                    fill="currentColor"
                  />
                </Box>
              </Box>
            </Link>
            <Text size={500} color="label.1">
              <a href="mailto:info@builtbyfield.com">Contact</a>
            </Text>
          </HStack>
          <a
            href="https://github.com/builtbyfield/field_next-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HStack align="center" space="spacing.3">
              <Icon symbol="github-fill" size={20} color="label.0" />
              <Text size={500} fontWeight={600}>
                GitHub
              </Text>
            </HStack>
          </a>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Header
