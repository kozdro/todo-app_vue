# Vue Todo App Project



### PART I: Webpack

The project template is built on top of the webpack config without preset packages, which nowadays is not the most common way to create such projects (see VueCLI). Without presets, you can directly see the basic webpack configuration needed to run the dev environment and production environment. This approach is more time consuming and requires you to write your own configurations for various loaders. For example, for this project SASS Loader has not been configured yet.

*Note all webpack configuration files are in the `build` directory*



**TASK 1**:

Configure SASS Loader for this project. Change `app.css` file to `app.scss` and try to change all in-components styles from `css` to `scss`, using `<style lang="scss">`.



**TASK 2**:

Add aliases to the webpack configuration, all imports that use reference to the `src` directory should be change to `@/` . For example in `router/index.js` there is a Home import that uses relative path `../pages/Home.vue`, change it to absolute import that use created alias in this case it should be `@/pages/Home.vue`.



**TASK 3:**

After running `npm run dev` command, browser always opens the project in the new tab. Try to disable this option.



### PART II: Components

After completing the configuration of our project, let's try to create new components.

