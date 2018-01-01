import React from 'react';

class Settings extends React.Component {

 render() {
     return (
        <div>
            <span>Difficulty:</span>
            <select>
                <option>Insane</option>
                <option>Normal</option>
            </select>
            <span> Play as X's or O's? </span>
            <select>
                <option>X</option>
                <option>O</option>
            </select>
        </div>
    );
 };
}

export default Settings;
