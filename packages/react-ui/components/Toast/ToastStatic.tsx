import React from 'react';
import ReactDOM from 'react-dom';

import { Nullable } from '../../typings/utility-types';

import { Toast, Action, ToastDataTids } from './Toast';

export class ToastStatic {
  public static push = (notification: string, action?: Nullable<Action>, showTime?: number) => {
    if (!ToastStatic.node) {
      ToastStatic.node = document.createElement('div');
      const { body } = document;
      if (!body) {
        throw Error('There is no "body" element in "document"');
      }
      body.appendChild(ToastStatic.node);

      ReactDOM.render(
        <Toast data-tid={ToastDataTids.toastStatic} ref={(el) => (ToastStatic.instance = el)} />,
        ToastStatic.node,
        () => ToastStatic._push(notification, action, showTime),
      );
    } else {
      ToastStatic._push(notification, action, showTime);
    }
  };

  public static _push = (notification: string, action?: Nullable<Action>, showTime?: number) => {
    if (ToastStatic.instance) {
      ToastStatic.instance.push(notification, action, showTime);
    }
  };

  public static close = () => {
    if (ToastStatic.instance) {
      ToastStatic.instance.close();
    }
  };

  private static node: HTMLDivElement;
  private static instance: Nullable<Toast> = null;
}
