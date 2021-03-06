const gulp = require('gulp');
const spawn = require('./utils/spawn-promise-wrapper');
const getNpmCmd = require('./utils/get-npm-cmd');
const logHelper = require('../infra/utils/log-helper');

// Use npm run lint to ensure we are using local eslint
gulp.task('lint', () => {
  return spawn(getNpmCmd(), ['run', 'lint'])
  .catch((err) => {
    logHelper.error(err);
    throw new Error(`[Workbox Error Msg] 'gulp lint' discovered errors.`);
  });
});
