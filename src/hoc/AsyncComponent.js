import React, { Component } from 'react';


const asyncComponent = (importedComponent) => {
  
   return class extends Component {
	state = {
            compoent: null
        }

        // set the imported component as the default component
        componentDidMount() {
           importedComponent()
		    .then(cpm => {
               this.setState({component: cpm.default});
            });
        }

	render() {
        
        //check if a component is set in the state 
	    const C = this.state.component;
    
        return  C ? <C {...this.props}/> : null;
        }
   }

}

export default asyncComponent;