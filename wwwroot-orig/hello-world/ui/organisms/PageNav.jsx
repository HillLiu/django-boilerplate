import React from 'react';
import { mixClass, lazyInject, Menu, Item } from 'react-atomic-molecule';
import get from 'get-object-value';
import {doc} from 'win-doc';

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
                const classes = mixClass({
                  active: doc().location && doc().location.pathname === href 
                });
                
                return <NavItem className={classes} key={key} href={href}>{get(menus, ['text', key])}</NavItem>
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
};

let injects;
const InjectStyles = {
    hover: [
	{
           color: '#3f6bbe !important'
	},
	'.page-header nav a:hover'
    ],
    active: [
        {
          color: '#3f6bbe !important'
        },
        '.page-header nav.ui.text.menu a.active.item'
    ]
};
