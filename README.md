Angular Web Project

Run the project: 
    - npm install
    - ng s

The front-end of the application is made on Angular along with the back-end
which is using backendless as REST API and storing data there.

More in-depth description:
The application logic is build around 2 services: UserService and PostService.
Corresponging to their names UserService is keeping most of the logic about a user and his interaction with the app. Currently BehaviourSubject is used to keep the state of the user. Similarly to UserService, PostService keeps most of the logic about the posts and their interaction with the users.
App is splitted on modules so it makes it easier to follow along.
Using rxjs as much as needed.
Still there are things which should be optimized about front-end to back-end interaction.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
#   Z e r o - t o - H e r o - A r t i c l e - A p p 
 
 #   A n g u l a r - P o s t - a p p 
 
 