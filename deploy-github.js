const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/RAQueiroz/homepage.git",
  },
  () => {
    console.log("🎉 done!")
  }
)
