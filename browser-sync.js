module.exports = {
  files: "./dist/pura.css",
  server: {
    baseDir: 'playground',
    index: "index.html",
    serveStaticOptions: {
      extensions: ["html", "css"]
    }
  },
  open: true,
  injectChanges: true,
  notify: true
};