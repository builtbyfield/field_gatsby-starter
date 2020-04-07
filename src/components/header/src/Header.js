import React from "react"
import { Link } from "gatsby"

import { Box, Flex, HStack, Text, Wrapper } from "components"

function Header() {
  return (
    <Box data-component-id="header" as="header">
      <Box
        height="4px"
        mb={{ _: "layout.3", md: "layout.4" }}
        bg="brand.primary"
      />
      <Wrapper>
        <Flex justifyContent="space-between">
          <HStack align="center" space="layout.1">
            <Box as={Link} to="/" mt="-2px">
              <Box
                as="svg"
                viewBox="0 0 44 17"
                display="block"
                width={(44 / 17) * 16}
                height={16}
                color="text.default"
              >
                <title>Field</title>
                <path
                  d="M4.6 9.32h2.52c.88 0 1.16.64 1.36 1.88h.6V6.68h-.6C8.28 7.92 8 8.56 7.12 8.56H4.6V2.68h2.88c1.48 0 2.22.64 3.04 2.82h.46l-.08-3.54H.56v.6c1.44.18 1.68.3 1.68 1.42v10c0 1.12-.24 1.24-1.68 1.42v.6h6.48v-.64c-1.92-.14-2.44-.4-2.44-1.58V9.32zm10.728-4h-.32l-3.18 1.04v.28l1.26.7v7.14c0 .74-.32.88-1.32.94V16h4.88v-.58c-1-.06-1.32-.2-1.32-.94V5.32zm-1.18-1.42c.82 0 1.44-.64 1.44-1.4 0-.78-.62-1.42-1.44-1.42a1.4 1.4 0 00-1.42 1.42c0 .76.6 1.4 1.42 1.4zm7.985 1.42c-2.66 0-4.7 2.38-4.7 5.72 0 2.94 1.76 5.16 4.64 5.16 2.18 0 3.6-1.3 4.08-3.16l-.26-.14c-.72 1.08-1.6 1.7-3 1.7-2.02 0-3.56-1.74-3.44-4.8h6.58v-.42c0-2.32-1.34-4.06-3.9-4.06zm-.18.68c1.44 0 2 1.32 2 3.16h-4.44c.16-1.8 1-3.16 2.44-3.16zM30.405.34h-.34l-3.16.98v.3l1.26.68v12.18c0 .74-.32.88-1.32.94V16h4.88v-.58c-1-.06-1.32-.2-1.32-.94V.34zm7.206 5.68c1.28 0 2.12 1.02 2.12 2.74v5.12c-.52.54-1.2.82-2.04.82-1.98 0-3.04-1.88-3.04-4.32 0-2.62 1.14-4.36 2.96-4.36zm2.12-3.72v3.78c-.5-.46-1.28-.74-2.26-.74-2.82 0-4.98 2.22-4.98 5.92 0 2.92 1.58 4.94 4.02 4.94 1.42 0 2.42-.76 3.22-1.86l-.08 1.86h.4l3.32-.72v-.52l-.52-.04c-.84-.08-.88-.26-.88-.94V.34h-.32l-3.18.98v.3l1.26.68z"
                  fill="currentColor"
                />
              </Box>
            </Box>
            <Text size={500} color="text.alt">
              <a href="mailto:info@builtbyfield.com">Contact</a>
            </Text>
          </HStack>
          <HStack align="center" space="spacing.3">
            <Box
              as="a"
              href="https://github.com/builtbyfield/field_gatsby-starter"
              target="_blank"
              rel="noopener noreferrer"
              mt="-2px"
            >
              <Box
                as="svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                display="block"
                verticalAlign="top"
                color="text.default"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </Box>
            </Box>
            <Text size={500} fontWeight={600}>
              <a
                href="https://github.com/builtbyfield/field_gatsby-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Text>
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Header
