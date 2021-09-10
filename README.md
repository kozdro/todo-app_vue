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



### PART II: Layout

After completing the configuration of our project, let's move to our application.



**TASK 1** HOMEPAGE:

Prepare layout for home page it should have logo (it could be anything with .png extension), title, description and button to the `/todos` view. The layout of this page should be based on CSS-Flexbox. Move title and logo to the spare components to make use of them on the next pages. This page should also contain 



**TASK 2** TODOS:

Prepare layout for todo list page. Title component should render different text here. All inputs and buttons should be styled.



**TASK 3** TODOVIEW:

As in the previous pages, also implement styles here.



### PART III: Components

Let's deep dive into VueJS features.



**TASK 1**:

Create components responsible for page whole page layout. Like menu and footer. Menu should have content dynamically changed depending one the current website.



**TASK 2:**

Add "due to" field to the todos,  prepare corresponding getters that will return formated dates. Display it in todo/s on `/todos` and `/todo-view/:id` pages. Add input responsible for adding "due to" date to the newly created tasks on `/todos` page. Use `Vuelidate` to validate this input.



**TASK 3:**

In folder `/data` there are mocked `todos` in `todos.json` file,  prepare proper action to get them (using `fetch`) on Home page `mounted`.



### PART IV: Backend

**TASK 1:**

Add `express.js` to your application, in `package.json` prepare appropriate script `dev:backend` to run your `express.js` backend.



**TASK 2**

Connect your backend with mongodb and store there newly created todos, implement endpoints that will be responsible for creating and listing todos. Instead of installing mongodb locally on your machine, you can use `docker-compose` from `mydivante` as any example to run mongodb in container. Todos in your database should have the same schema as the ones from the `todos.json`.



**TASK 3**:
Connect your backend with frontend, add corresponding methods that will be responsible for adding and fetching tasks from backend on the frontend side. Add proxy to webpack dev-server, backend should be available at `localhost:8080/api`.











