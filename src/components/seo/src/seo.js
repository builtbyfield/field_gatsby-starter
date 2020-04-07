import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({
  description,
  imageOpenGraph,
  imageTwitter,
  imageAlt,
  lang,
  meta,
  title,
  twitterHandle,
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        // =============================================================
        // Basic HTML
        //
        // Tags that are not specific to any particular spec besides
        // the HTML one.
        //
        // =============================================================
        {
          name: "description",
          content: description,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover",
        },
        // =============================================================
        // Open Graph protocol
        //
        // OGP is heavily used by Facebook, LinkedIn, iMessage, etc. and
        // often acts as the primary fallback for platforms that have
        // their own spec.
        //
        // =============================================================
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: `og:image`,
          content: imageOpenGraph,
        },
        {
          property: `og:image:secure_url`,
          content: imageOpenGraph,
        },
        {
          property: `og:image:alt`,
          content: imageAlt,
        },
        {
          property: `og:image:type`,
          content:
            imageOpenGraph && imageOpenGraph.indexOf(".png") !== -1
              ? "image/png"
              : "image/jpeg",
        },
        {
          property: `og:image:width`,
          content: "1200",
        },
        {
          property: `og:image:height`,
          content: "630",
        },
        // =============================================================
        // Twitter
        //
        // These guys have a bit of a custom spec that falls back to OPG
        // if these fields aren't explicitly set. Setting them however
        // makes for a better Twitter experience, so let's set 'em.
        //
        // =============================================================
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: twitterHandle,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: imageTwitter,
        },
        {
          name: "twitter:image:alt",
          content: imageAlt,
        },
        // =============================================================
        // Other
        //
        // The place for things like Google website verification and
        // other possibly odd tags.
        //
        // =============================================================
        // {
        //   name: "google-site-verification",
        //   content: "###",
        // },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  title: "Field",
  description: ``,
  imageOpenGraph: "",
  imageTwitter: "",
  imageAlt: "",
  twitterHandle: "builtbyfield",
  lang: "en",
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageOpenGraph: PropTypes.string.isRequired,
  imageTwitter: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
