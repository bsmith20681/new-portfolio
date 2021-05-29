const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Coding Projects\\New Portfolio\\portfolio\\src\\pages\\404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\Coding Projects\\New Portfolio\\portfolio\\src\\pages\\blog.js"))),
  "component---src-pages-contact-me-js": hot(preferDefault(require("D:\\Coding Projects\\New Portfolio\\portfolio\\src\\pages\\contact-me.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Coding Projects\\New Portfolio\\portfolio\\src\\pages\\index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("D:\\Coding Projects\\New Portfolio\\portfolio\\src\\templates\\post.js")))
}

