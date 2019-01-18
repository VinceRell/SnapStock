import React from 'react';

const input = (props) => {
    // create a variable for containing the input element
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                value={props.value} />
            break;

        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value} />
            break;
        case ('select'):
            inputElement = (
                <select
                    value={props.value}>
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
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default input;