import gulp from 'gulp';
import gulpStats from 'gulp-stats';
import serve from './gulp/serve';
import clean from './gulp/clean';
import postcss from './gulp/postcss';
import build from './gulp/build';
import dev from './gulp/dev';

// set default task
export default build;