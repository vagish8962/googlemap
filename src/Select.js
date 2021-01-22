import React from 'react';

const Select = ({ options, selectedoption }) => {
    /* Select Change handler */
    const slectedOptionHandler = ({ target, nativeEvent }) => { 
        let index = nativeEvent.target.selectedIndex;
        selectedoption({
            title: nativeEvent.target[index].text,
            value: target.value
        });
    };
    return <select onChange={ slectedOptionHandler } >
        {options.map(({ value, label }, index) => <option key = {value} value={value} >{label}</option>)}
    </select>
};
export default Select;