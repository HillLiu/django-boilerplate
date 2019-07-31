import React, {PureComponent} from 'react';
import Reshow, {update, ReshowMessage} from 'reshow';
import {PopupPool} from 'organism-react-popup';
import {ajaxDispatch} from 'organism-react-ajax';
import getCookie from 'get-cookie';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';
import {PageLoadProgressHandler} from 'organism-react-progress';

import Home from '../pages/Home';

const themes = {
  Home,
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
