const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\src\\pages\\blog.js"))),
  "component---src-pages-contact-me-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\src\\pages\\contact-me.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\src\\pages\\index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("D:\\Coding Projects\\portfolio\\src\\templates\\post.js")))
}

