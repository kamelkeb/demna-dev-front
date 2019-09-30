import React from 'react';
import { Icon } from 'semantic-ui-react';

const Logo = (props) => {
    return (
        <div>
            <Icon
                size="large"
                name={props.isConnected ? "tint" : "tint"} 
            />
            <span id="logo_demna"> demna</span>
        </div>
    );
}

export default Logo;