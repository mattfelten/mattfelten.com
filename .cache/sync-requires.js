const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/workspaces/mattfelten.com/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/workspaces/mattfelten.com/src/pages/404.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/workspaces/mattfelten.com/src/pages/index.jsx"))),
  "component---src-pages-store-jsx": hot(preferDefault(require("/workspaces/mattfelten.com/src/pages/store.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/workspaces/mattfelten.com/src/templates/Post.jsx"))),
  "component---src-templates-work-jsx": hot(preferDefault(require("/workspaces/mattfelten.com/src/templates/Work.jsx")))
}

