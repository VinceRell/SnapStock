import React from 'react';
import classes from './Input.module.scss';


const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ("input"):
            inputElement = <input 
                className={classes.Input__search}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;

        case ("textarea"):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;

        case ("select"):
            inputElement = ( <select
                    className={classes.Input__select}
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