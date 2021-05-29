import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        padding: `1.5rem`,
        textAlign: "center",
        backgroundColor: "#6E6E6E",
        color: "white",
      }}
    >
      © {new Date().getFullYear()}, All Rights Reserved. Site build with Gatsby
      ❤️
      {` `}
    </footer>
  )
}

export default Footer
