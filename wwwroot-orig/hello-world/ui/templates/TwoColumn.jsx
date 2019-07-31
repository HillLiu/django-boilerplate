import React from 'react'; 
import {
    lazyInject,
    SemanticUI
} from 'react-atomic-molecule';

import {getDocTemplate} from '../templates/DocTemplate';
import MemberHeader from '../organisms/MemberHeader';
import PageFooter from '../organisms/PageFooter';

const DocTemplate = getDocTemplate(
    {
        mdIcon: {
            display: 'block'
        }
    },
    true,
    {
        sideWidth: 270,
    }
);

const TwoColumn = ({body, ...props}) =>
{
    injects = lazyInject( injects, InjectStyles );
    return (
        <SemanticUI>
            <MemberHeader />
            <DocTemplate 
                {...props}
                body={
                    <SemanticUI>
                        {body}
                    </SemanticUI>
                }
            />
            <PageFooter />
        </SemanticUI>
    );
}

export default TwoColumn;

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
