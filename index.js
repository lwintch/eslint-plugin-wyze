/* eslint-disable global-require */
module.exports = {
  rules: {
    'func-call-arg-spacing': require('./lib/rules/func-call-arg-spacing'),
    'func-params-spacing': require('./lib/rules/func-params-spacing'),
    'max-file-length': require('./lib/rules/max-file-length'),
    'newline-after-export': require('./lib/rules/newline-after-export'),
    'sort-destructuring-keys': require('./lib/rules/sort-destructuring-keys'),
    'sort-imports': require('./lib/rules/sort-imports'),
    'space-around-conditional': require('./lib/rules/space-around-conditional'),
  },
  configs: {
    recommended: {
      rules: {
        'lwintch-wyze/func-call-arg-spacing': 'error',
        'lwintch-wyze/func-params-spacing': 'error',
        'lwintch-wyze/max-file-length': 'error',
        'lwintch-wyze/newline-after-export': 'error',
        'lwintch-wyze/sort-destructuring-keys': 'error',
        'lwintch-wyze/sort-imports': 'error',
        'lwintch-wyze/space-around-conditional': 'error',
      },
    },
  },
}
