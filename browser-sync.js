module.exports = {
  files: "./dist/pura.css",
  server: {
    baseDir: 'playground/',
    serveStaticOptions: {
      extensions: ["html", "css"]
    }
  },
  open: true,
  injectChanges: true,
  notify: true
};