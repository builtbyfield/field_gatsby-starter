/** We have two spacing scales for different use cases */

const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48]

/**
 * SPACING
 * space.spacing is reserved for component specific use cases that demand more precision
 */
space.spacing = space

/**
 * LAYOUT
 * space.layout is meant to be used for laying out components and composing pages.
 */
space.layout = [0, 16, 24, 32, 48, 64, 96, 160]

export default space
