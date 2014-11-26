# generator-gulp-angular-subtask

> A helper generator for [gulp-angular](https://github.com/Swiip/generator-gulp-angular) generator


## Getting Started

### Installation


```
npm install -g generator-gulp-angular-subtask
```

### To enable style generation support

add `<!-- endstyles -->` in your index.html file after this line: `<link rel="stylesheet" href="app/index.css">`

The result should look like this:
>     <!-- build:css({.tmp,src}) styles/app.css -->
    <link rel="stylesheet" href="app/index.css">
    <!-- endstyles -->
    <!-- endbuild -->
 

### Why should i use it?

For the time been, the great [gulp-angular](https://github.com/Swiip/generator-gulp-angular) generator does not support sub tasks like controllers and directives. <br>
So i decided to build a helper generator that creates those tasks for me and thought about sharing it.

This project will be deprecated when the team decide to support this issue. 

### Usage:

I currently support these sub tasks: 

  * controller
  * directive
  * style (supports css, less, scss, sass, stylus. Only create the files, NOT implementing compass. see installation section)
  * partial
  
### options

To see the options you can always use the help option on a task

```
yo gulp-angular-subtask:[SUBTASK] --help
```

**These are the options available**

  * --dest : Set a destination where to save the file
  * --component : Set the destination to be under the component library
  * --coffee : Generate coffeescript template instead of regular javascript [controller, directives]
  * --style-type : Generate a style file based on a type {scss, sass, less, styl} [style]
  * --jade : Generate a jade partial [partial]
  
Please note that for the time been, gulp-angular does not support coffescript. I'm using my IDEA's file watcher to generate a corresponding js file.  

## Examples

* To Create a controller 

  ```
  yo gulp-angular-subtask:controller user
  ```
  
  Produces 
> src/app/user/controllers/user-controller.js

* Creating a controller under the components library

  ```
  yo gulp-angular-subtask:controller navbar --component
  ```
  
  Produces 
>src/components/navbar/controllers/navbar-controller.js

* Creating a controller under user specific library 

  ```
  yo gulp-angular-subtask:controller user --dest="specific/location"
  ``` 
  
  Produces 
>src/specific/location/controllers/navbar-controller.js

* Creating a coffee script directive
  
  ```
  yo gulp-angular-subtask:directive user --coffee
  ```
  
  Produces 
>src/app/user/directives/user-directive.coffee

* Creating a css file 
  
  ```
  yo gulp-angular-subtask:style user
  ```
  
  Produces 
>src/app/user/styles/user.css

* Creating a scss style 
  
  ```
  yo gulp-angular-subtask:style user --style-type="scss"
  ```
  
  Produces 
>src/app/user/styles/user.scss

* Creating a partial 
  
  ```
  yo gulp-angular-subtask:partial user
  ```
  
  Produces 
>src/app/user/partials/user.html

**This will work the same with the directive subtask also**

## License

MIT
