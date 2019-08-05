import React, {PureComponent} from 'react';
import Reshow, {update, ReshowMessage} from 'reshow';
import {PopupPool} from 'organism-react-popup';
import {PageLoadProgressHandler} from 'organism-react-progress';

// config
import {ajaxDispatch} from 'organism-react-ajax';
import getCookie from 'get-cookie';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';

import Home from '../pages/Home';
import Register from '../pages/Register';

const themes = {
  Home,
  Register
};

class Index extends PureComponent {
  componentDidMount() {
    ajaxDispatch({
      type: 'ajaxGet',
      params: {
        url: '/conf/',
        callback: (json, text) => {
          const configs = nest(ini(text), '_');
          update(configs);
        },
      },
    });
  }

  render() {
    const props = this.props;
    return (
      <div>
        <Reshow immutable={true} themes={themes} {...props} />
        <PopupPool />
        <PageLoadProgressHandler ajax zIndex={1000} />
        <ReshowMessage defaultAlertProps={{position: 'bottom'}} />
      </div>
    );
  }
}

export default Index;
