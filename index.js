const http = require("http")
const fs = require("fs")
const path = require("path")
const PORT = 8080

const server = http.createServer((req, res) => {
  const fileDirection = path.join(__dirname, "views")

  switch (req.url) {
    case "/":
      fs.readFile(`${fileDirection}/index.html`, "utf8", (err, data) => {
        if (err) throw err
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 200
        res.end(data)
      })
      break

    case "/about":
      fs.readFile(`${fileDirection}/about.html`, "utf8", (err, data) => {
        if (err) throw err
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 200
        res.end(data)
      })
      break
    case "/contact-me":
      fs.readFile(`${fileDirection}/contact-me.html`, "utf8", (err, data) => {
        if (err) throw err
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 200
        res.end(data)
      })
      break
    default:
      fs.readFile(`${fileDirection}/404.html`, "utf8", (err, data) => {
        if (err) throw err
        res.setHeader("Content-Type", "text/html")
        res.statusCode = 404
        res.end(data)
      })
  }
})

server.listen(PORT, () => {
  console.log("Server is runnin on port " + PORT)
})
