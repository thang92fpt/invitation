const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/miftah/gatsby/wedding/.cache/dev-404-page.js"))),
  "component---src-pages-e-ticket-js": hot(preferDefault(require("/home/miftah/gatsby/wedding/src/pages/e-ticket.js"))),
  "component---src-pages-generate-link-js": hot(preferDefault(require("/home/miftah/gatsby/wedding/src/pages/generate-link.js"))),
  "component---src-pages-generate-qr-js": hot(preferDefault(require("/home/miftah/gatsby/wedding/src/pages/generate-qr.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/miftah/gatsby/wedding/src/pages/index.js")))
}

