import '../@types';
import { PAGE_HIDE, PAGE_SHOW, PAGE_VISIBILITY_CHANGE } from '../constants';

export const EventName = {
  PAGE_SHOW,
  PAGE_HIDE,
  PAGE_VISIBILITY_CHANGE,
} as const;

export const EventTarget = {
  [PAGE_SHOW]: window,
  [PAGE_HIDE]: window,
  [PAGE_VISIBILITY_CHANGE]: window.document,
} as const;

export interface BindEventObject {
  eventName: ObjectValue<typeof EventName>;
  handler: AnyFunction;
  options?: boolean | AddEventListenerOptions;
}

export type BindEventParam = BindEventObject | BindEventObject[];

export const RegisteredEventList: BindEventObject[] = [];

export function bindEvent(params: BindEventParam): boolean {
  try {
    if (!Array.isArray(params)) {
      params = [params];
    }
    params.forEach((param) => {
      const { eventName, handler, options } = param;
      EventTarget[eventName].addEventListener(eventName, handler, options);
      RegisteredEventList.push(param);
    });
    return true;
  } catch (exception) {
    return false;
  }
}

export function unbindEvent(params: BindEventParam): boolean {
  try {
    if (!Array.isArray(params)) {
      params = [params];
    }
    while (params.length) {
      const { eventName, handler, options } = params.shift() || {};
      if (!eventName || !handler) {
        continue;
      }
      EventTarget[eventName].removeEventListener(eventName, handler, options);
    }
    return true;
  } catch (exception) {
    return false;
  }
}

export function checkVisible(): boolean {
  return window.document?.visibilityState === 'visible' || !document?.hidden;
}

export function refresher(precondition?: AnyFunction): void {
  if (precondition !== undefined && typeof precondition === typeof Function && !precondition()) {
    return;
  }
  window.location.reload();
}

export function keepFresher(): boolean {
  return bindEvent([
    { eventName: PAGE_SHOW, handler: refresher },
    { eventName: PAGE_VISIBILITY_CHANGE, handler: refresher.bind(null, checkVisible) },
  ]);
}

export function unKeepFresher(): boolean {
  return unbindEvent(RegisteredEventList);
}