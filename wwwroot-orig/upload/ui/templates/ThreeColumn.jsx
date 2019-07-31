import React from 'react'; 
import {
    lazyInject,
    SemanticUI
} from 'react-atomic-molecule';

import {getDocTemplate} from '../templates/DocTemplate';
import MemberHeader from '../organisms/MemberHeader';

const DocTemplate = getDocTemplate(
    {
        mdIcon: {
            display: 'block'
        }
    },
    true,
    {
        sideWidth: 224,
        rightWidth: 224,
    }
);

const ThreeColumn = ({body, ...props}) =>
{
    injects = lazyInject( injects, InjectStyles );
    return (
        <DocTemplate 
            {...props}
            body={
                <SemanticUI>
                    <MemberHeader />
                    {body}
                </SemanticUI>
            }
        />
    );
}

export default ThreeColumn;

let injects;
const InjectStyles = {
    body: [
        {
            boxSizing: 'border-box',
            background: '#f8f8f8'
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
