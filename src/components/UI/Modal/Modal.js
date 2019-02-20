import React, { Component } from 'react';
import classes from './Modal.module.scss';

// component imports
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        let displayModal = this.props.showModal ? 
                                    [classes.modal, classes.showModal].join(" ") : 
                                    classes.modal; 

        return (
           <React.Fragment>
               <Backdrop show={this.props.showModal} close={this.props.closeImage}/>
               <div className={displayModal}>
                    {this.props.children}
               </div>
           </React.Fragment> 
        );
    }
}


export default Modal;