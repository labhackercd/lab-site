# Lab Hacker's Site

## Setup Instructions

Initialize `npm`

```bash
$ npm init
```

Install `Gulp` locally

```bash
$ sudo npm install gulp --save-dev
```

Finally, install `Gulp` required dependencies

```bash
$ sudo npm install gulp-uglify browser-sync gulp-plumber gulp-autoprefixer gulp-sass gulp-pug gulp-imagemin gulp-cache gulp-clean-css gulp-sourcemaps gulp-concat beeper gulp-util gulp-rename gulp-notify --save-dev
```

### Running Your Local Server With Gulp

After the installation of all requirements and its dependencies, your local web development environment is ready to run. Setup your initial files with `gulp setup`. This command is only necessary the first time the project is set or if the build folder is deleted.

```bash
$ gulp setup
```

Now run your local server using the `watch` task

```bash
$ gulp watch
```

This task will open the browser window usually with the URL http://localhost:3000/. Any saved changes made to the project files, will reload automatically the browser.
