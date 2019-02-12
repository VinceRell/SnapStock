import React from 'react';
import classes from './Input.module.scss';


const input = (props) => {
    let inputElement = null;
    
    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className={props.showSearch === "/" ? classes.Input__search : classes.Input__search_nav}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;

        case ("select"):
            inputElement = (<select
                className={props.showSearch === "/" ? classes.Input__select : classes.Input__select_nav}
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
        
        case ("textarea"):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
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