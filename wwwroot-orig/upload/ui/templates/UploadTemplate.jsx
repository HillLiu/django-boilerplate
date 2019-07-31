import React from 'react';
import {OneColumn} from 'pmvc_react_landing';
import {
    lazyInject,
} from 'react-atomic-molecule';

import PageHeader from '../organisms/PageHeader';
import PageFooter from '../organisms/PageFooter';
import TwoColumn from '../templates/TwoColumn';
import ThreeColumn from '../templates/ThreeColumn';

const UploadTemplate = ({tpl, style, ...rest}) => {
    injects = lazyInject( injects, InjectStyles );
    switch(tpl)
    {
        case 'three':
            return (
                <ThreeColumn
                    {...rest}
                    style={style}
                    footer={<PageFooter />}
                />
            );
        case 'two':
            return (
                <TwoColumn
                    {...rest}
                    style={style}
                />
            );
	case 'one':
	default:
	    return ( 
                <OneColumn
                    {...rest}
                    style={{...Styles.container, ...style}}
                    header={<PageHeader />}
                    footer={<PageFooter />}
                />
            );
    }
};

export default UploadTemplate;

const Styles = {
    container: {
        paddingTop: 73 
    }
};

let injects;
const InjectStyles = {
    resetPureCss: [
        {
            letterSpacing: 0
        },
        '.pure-g'
    ],
    body: [
        {
            fontSize: 14,
            minWidth: 350,
            boxSizing: 'border-box',
            backgroundImage: 'linear-gradient(313deg, #061649, #372171)'
        },
        'body'
    ],
    boxSizing: [
        {
            boxSizing: 'inherit'
        },
        '*, :after, :before'
    ]
};
