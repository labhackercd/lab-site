# Lab Hacker's Site

## Setup Instructions

Firstly, install *yarn*. You can learn how to do it [here](https://yarnpkg.com/lang/en/docs/install/).

Now, initialize yarn inside the repository directory.

```bash
$ yarn
```

After that you'll have installaled all requirements and its dependencies, your local web development environment is ready to run. Setup your files with `yarn setup`. This command is only necessary the first time the project is set or if the build folder is deleted.

```bash
$ yarn setup
```

Now run your local server using the `serve` task

```bash
$ yarn serve
```

This task will open the browser window with the URL http://localhost:3000/. Any saved changes made to the project files, will reload automatically the browser using browserSync.
