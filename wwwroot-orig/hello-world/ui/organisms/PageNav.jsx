import React from 'react';
import { mixClass, lazyInject, Menu, Item } from 'react-atomic-molecule';
import get from 'get-object-value';

const keys = Object.keys;

const NavItem = ({style, ...props}) =>
<Item {...props} style={{...Styles.item, ...style}} atom="a" />

const PageNav = ({className, style, menus}) => { 
    injects = lazyInject( injects, InjectStyles );
    const classes = mixClass(
        'text',
        className
    );
    return (
        <Menu atom="nav" style={{...Styles.container, ...style}} className={classes}> 
        {
            keys(get(menus, ['text'], [])).map(key => { 
                let href = get(menus, ['href', key]);
                let style;
                if ('undefined' !== document && document.location.pathname === href) {
                    style = Styles.active;
                    href = null;
                }
                return <NavItem style={style} key={key} href={href}>{get(menus, ['text', key])}</NavItem>
            })
        }
        </Menu>
    );
}

export default PageNav;

const Styles = {
    container: {
        boxSizing: 'border-box',
        margin: 0
    },
    item: {
        padding: '28px 12px',
        fontWeight: 700,
        color: '#4c4c4c',
    },
    active: {
        color: '#3f6bbe'
    }
};

let injects;
const InjectStyles = {
    hover: [
	{
           color: '#3f6bbe !important'
	},
	'.page-header nav a:hover'
    ]
};
