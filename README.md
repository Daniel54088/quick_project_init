# quick_project_init
Quick start a react project with [webpack4](https://webpack.js.org/) & [react-router-3](https://www.npmjs.com/package/react-router-3)


## Quick Start
use git
```bash
git clone https://github.com/Daniel54088/quick_project_init.git  
```
&  command `yarn` or `npm install` in Terminal to install packages

### Start Coding
Type the following bash in Terminal:
```bash
 yarn start 
```
It will start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) in your local environment and open the project in browser automatically.

Then just happy coding with the `hot-reload`(means when you save the files, it will automatically refresh the project in browser).


### Online Time
Type:
```bash
 yarn build
```
Webpack will minimize and pack the whole project in `dist/` folder and put it on the server.

## Feature
### SPA
Add new routes in `index.js` and create new component for it.
```html
import App from "./App"
import Home from './component/Home'
import Login from './component/Login'
//IMPORT NEW COMPONENT HERE

ReactDOM.render(
    <Router history={browserHistory} >

        <Route path="/" component={App} >
            <IndexRoute component={Login}/>
            <Route path="home" component={Home} />
            //CREATE NEW ROUTE HERE 
        </Route>

    </Router>
    , document.querySelector('#app')
)
```
