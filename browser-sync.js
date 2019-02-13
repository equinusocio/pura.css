module.exports = {
  files: [
    './dist/pura.css'
  ],
  server: {
    baseDir: './',
    serveStaticOptions: {
      extensions: ['html', 'css', 'js']
    }
  },
  startPath: "/test/index.html",
  open: true,
  injectChanges: true,
  notify: true
};
