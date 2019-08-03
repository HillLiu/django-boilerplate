import React from 'react';

import {SemanticUI} from 'react-atomic-molecule';
import {Section} from 'reshow';

const Body = ({desc}) =>
<SemanticUI style={Styles.container} atom="footer">
{desc}
</SemanticUI>


const PageFooter = () =>
<Section name="pageFooter"><Body /></Section>

export default PageFooter;

const Styles = {
    container: {
        padding: 35,
        background: '#303e68',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1rem'
    },
    
};
