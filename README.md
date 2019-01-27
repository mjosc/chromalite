# chromalite
Pinterest for colors.  
  
> This is a live project in its infancy. Check back frequently for updates and new features.
  
### Demo
The app currently runs on a simple in-memory database (see [src/database.ts](https://github.com/mjosc/chromalite/blob/master/src/database.ts)). Start the development server with `npm start`. Right-click on a color to open a custom context menu ([react-contexify](https://github.com/fkhadra/react-contexify)).
  
### Current Work
* Implementing Redux
* Refactoring the in-memory database's state to match that of the redux store
* Building out the context menu functionality
* Implement the container/presentational component pattern
* Add tooltips for navigation and project/scheme edits
