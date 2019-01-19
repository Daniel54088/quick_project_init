import React from "react";
import Header from './component/header';

 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
             <Header/>
               <div id="component" key={this.props.location.key}>
                {this.props.children}
               </div>
            </div>
        )
    }
};
export default App;
