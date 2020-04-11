/**
 * Global Styles
 *
 * Here we define global styles that can reference the Theme. We apply our own layer of
 * CSS reset and custom styles from our Theme. Our reset references from Tailwind CSS:
 * https://github.com/tailwindcss/tailwindcss/blob/master/src/plugins/css/preflight.css
 *
 * Our manual usage of Tailwind means that we are directly referencing SUIT Base:
 * https://github.com/suitcss/base
 */

import React from "react"
import { Global } from "@emotion/core"
import css from "@styled-system/css"
import { normalize } from "polished"

const GlobalStyles = () => (
  <Global
    styles={css({
      ...normalize(),
      /**
       * 1. Set the default font family to be set via the Theme.js.
       * 2. Use a default "normal" line-height so the user isn't forced
       *    to override it to ensure consistency even when using the
       *    default theme.
       */
      html: {
        fontFamily: "sans", // 1
        lineHeight: 1.5, // 2
        color: "text.default",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },

      /**
       * 1. Prevent padding and border from affecting element width.
       *
       *    We used to set this in the html element and inherit from
       *    the parent element for everything else. This caused issues
       *    in shadow-dom-enhanced elements like <details> where the content
       *    is wrapped by a div with box-sizing set to `content-box`.
       *
       *    https://github.com/mozdevs/cssremedy/issues/4
       *
       *
       * 2. Allow adding a border to an element by just adding a border-width.
       *
       *    By default, the way the browser specifies that an element should have no
       *    border is by setting it's border-style to `none` in the user-agent
       *    stylesheet.
       *
       *    In order to easily add borders to elements by just setting the `border-width`
       *    property, we change the default border-style for all elements to `solid`, and
       *    use border-width to hide them instead. This way we only need to set the
       *    `border-width` property instead of the entire `border` shorthand, making our
       *    border definitions much more straightforward to compose.
       */
      "*,*::before,*::after": {
        boxSizing: "border-box", // 1
        borderWidth: 0, // 2
        borderStyle: "solid", // 2
        borderColor: "surface.border", // 2
      },

      body: {
        m: 0,
        overflowX: "hidden",
        overflowY: "scroll",
        overscrollBehavior: "none",
        bg: "surface.background",
      },

      /**
       * Removes the default spacing and border for appropriate elements.
       */
      "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { m: 0 },

      "h1,h2,h3,h4,h5,h6": {
        fontSize: "inherit",
        fontWeight: "inherit",
      },

      /**
       * Reset links to optimize for opt-in styling instead of opt-out.
       */
      a: {
        textDecoration: "inherit",
        color: "inherit",
      },

      "ol,ul": {
        listStyle: "none",
        m: 0,
        p: 0,
      },

      table: {
        borderCollapse: "collapse",
      },

      /*
       * Ensure horizontal rules are visible by default
       */
      hr: {
        borderTopWidth: "1px",
      },

      /**
       * Undo the `border-style: none` reset that Normalize applies to images so that
       * our `border-{width}` utilities have the expected effect.
       *
       * The Normalize reset is unnecessary for us since we default the border-width
       * to 0 on all elements.
       */
      img: {
        borderStyle: "solid",
      },

      /**
       * Reset form element properties that are easy to forget to
       * style explicitly so you don't inadvertently introduce
       * styles that deviate from your design system. These styles
       * supplement a partial reset that is already applied by
       * normalize.css.
       */
      "button,input,optgroup,select,textarea": {
        p: 0,
        lineHeight: "inherit",
        color: "inherit",
        appearance: "none",
      },

      textarea: {
        resize: "vertical",
      },

      button: {
        backgroundColor: "transparent",
        backgroundImage: "none",
        p: 0,

        /**
         * Work around a Firefox/IE bug where the transparent `button` background
         * results in a loss of the default `button` focus styles.
         */
        "&:focus": {
          outline: "1px dotted",
        },
      },

      "button,[role='button']": {
        cursor: "pointer",
      },

      fieldset: {
        m: 0,
        p: 0,
      },

      /**
       * Use the configured 'mono' font family for elements that
       * are expected to be rendered with a monospace font.
       */
      "pre,code,kbd,samp": {
        fontFamily: "mono",
      },

      /**
       * Make replaced elements `display: block` by default as that's
       * the behavior you want almost all of the time. Inspired by
       * CSS Remedy, with `svg` added as well.
       *
       * https://github.com/mozdevs/cssremedy/issues/14
       */
      "img,svg,video,canvas,audio,iframe,embed,object": {
        display: "block",
        verticalAlign: "middle",
      },

      /**
       * Constrain images and videos to the parent width and preserve
       * their instrinsic aspect ratio.
       *
       * https://github.com/mozdevs/cssremedy/issues/14
       */
      "img,video": {
        maxWidth: "100%",
        height: "auto",
      },
    })}
  />
)

export default GlobalStyles
