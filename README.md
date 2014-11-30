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
  * factory
  * service
  * value
  * constant
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
  * --bundle : Create the task's file under a specific bundle instead of the file name
  * --coffee : Generate coffeescript template instead of regular javascript [controller, directives]
  * --service-value: Set value for the value / constant service
  * --style-type : Generate a style file based on a type {scss, sass, less, styl} [style]
  * --jade : Generate a jade partial [partial]
  
Please note that for the time been, gulp-angular does not support coffescript. I'm using my IDEA's file watcher to generate a corresponding js file.  
Also note that you can combine multiple options together.

## Examples

### Controllers

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

* Creating a coffee script controller
  
  ```
  yo gulp-angular-subtask:controller user --coffee
  ```
  
  Produces 
>src/app/user/controllers/user-controller.coffee


* Creating a controller under user specific library 

  ```
  yo gulp-angular-subtask:controller user --dest=specific/location
  ``` 
  
  Produces 
>src/specific/location/user-controller.js
  
* Creating a user details controller under the user bundle 

  ```
  yo gulp-angular-subtask:controller user-details --bundle=user
  ``` 
  
  Produces 
>src/app/user/controllers/user-details-controller.js

* Combining options

  ```
  yo gulp-angular-subtask:controller user-details --component --bundle=user --coffee
  ``` 
  
  Produces 
>src/component/user/controllers/user-details-controller.coffee

### Directives

* To Create a Directive 

  ```
  yo gulp-angular-subtask:directive user
  ```
  
  Produces 
> src/app/user/directives/user-directive.js

* Creating a directive under the components library

  ```
  yo gulp-angular-subtask:directive navbar --component
  ```
  
  Produces 
>src/components/navbar/directives/navbar-directive.js

* Creating a coffee script directive
  
  ```
  yo gulp-angular-subtask:directive user --coffee
  ```
  
  Produces 
>src/app/user/directives/user-directive.coffee


* Creating a directive under user specific library 

  ```
  yo gulp-angular-subtask:directive user --dest="specific/location"
  ``` 
  
  Produces 
>src/specific/location/user-directive.js

* Creating a user-details directive under the user bundle 

  ```
  yo gulp-angular-subtask:directive user-details --bundle=user
  ``` 
  
  Produces 
>src/app/user/directives/user-details-directive.js

* Combining options

  ```
  yo gulp-angular-subtask:directive user-details --component --bundle=user --coffee
  ``` 
  
  Produces 
>src/component/user/controllers/user-details-controller.coffee

### Factories, Services and Provides

These sub tasks works exactly like the controllers and directives sub tasks.
Please take a look at their examples to understand how to use their options.

* Creating a Factory 

  ```
  yo gulp-angular-subtask:factory user-details
  ``` 
  
  Produces 
>src/app/user-details/factories/user-details-factory.js

* Creating a Service 

  ```
  yo gulp-angular-subtask:service user-details
  ``` 
  
  Produces 
>src/app/user-details/services/user-details-service.js

* Creating a Provider 

  ```
  yo gulp-angular-subtask:provider user-details
  ``` 
  
  Produces 
>src/app/user-details/providers/user-details-provider.js

### Values, Constants

* Creating a Value 

  ```
  yo gulp-angular-subtask:value user-id --bundle=user
  ``` 
  
  Produces 
>src/app/user/values/user-id-value.js

* Creating a Constant with value from the cmd

  ```
  yo gulp-angular-subtask:constant user-id --bundle=user --service-value=4343434
  ``` 
  
  Produces 
>src/app/user/constants/user-id-constant.js with value of 4343434

### Styles

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

### Partials

* Creating a partial 
  
  ```
  yo gulp-angular-subtask:partial user
  ```
  
  Produces 
>src/app/user/partials/user.html

* Creating a jade partial 
  
  ```
  yo gulp-angular-subtask:partial user --jade
  ```
  
  Produces 
>src/app/user/partials/user.jade


## License

MIT
