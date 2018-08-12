module.exports = {
  files: './dist/pura.css',
  server: {
    baseDir: 'test/',
    serveStaticOptions: {
      extensions: ['html', 'css']
    }
  },
  open: true,
  injectChanges: true,
  notify: true
};