import React from 'react';
import classes from './Input.module.scss';


const input = (props) => {
    let inputElement = null;
    
    switch (props.elementType) {
        case ("search"):
            inputElement = <input
                className={props.showSearch === "/" ? classes.input__search : classes.input__search_nav}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;

        case ("select"):
            inputElement = (<select
                className={props.showSearch === "/" ? classes.input__select : classes.input__select_nav}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            );
            break;

        default:
            inputElement = <input
                className={classes.input__default}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <React.Fragment>
            {inputElement}
        </React.Fragment>
    );
}

export default input;