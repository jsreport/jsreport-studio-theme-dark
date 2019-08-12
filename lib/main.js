
module.exports = (reporter, definition) => {
  reporter.studio.registerTheme({
    name: 'dark',
    variables: require('./themeVars'),
    previewColor: '#1D1D1D',
    editorTheme: 'vs-dark'
  })
}
