/// <reference types="@oshx/type-helper" />
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

export function bindEvent(params: BindEventParam): void {
  try {
    if (!Array.isArray(params)) {
      params = [params];
    }
    params.forEach((param) => {
      const { eventName, handler, options } = param;
      EventTarget[eventName].addEventListener(eventName, handler, options);
      RegisteredEventList.push(param);
    });
  } catch (exception) {
    console.debug(exception);
  }
}

export function unbindEvent(params: BindEventParam): void {
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
  } catch (exception) {
    console.debug(exception);
  }
}

export function createPersistedVisibleChecker(callback?: AnyFunction): AnyFunction {
  return function checkPersistedVisible(delegatedEvent?: PageTransitionEvent): void {
    if (window.document?.visibilityState === 'hidden' || document?.hidden) {
      return;
    }
    switch (delegatedEvent?.type) {
      case PAGE_SHOW:
        if (!delegatedEvent?.persisted) {
          return;
        }
        break;
      case PAGE_VISIBILITY_CHANGE:
        break;
      default:
        return;
    }
    callback?.();
  };
}

export function refresher(): void {
  window.location.reload();
}

export function keepFresher(): void {
  const handler = createPersistedVisibleChecker(refresher);
  return bindEvent([
    { eventName: PAGE_SHOW, handler },
    { eventName: PAGE_VISIBILITY_CHANGE, handler },
  ]);
}

export function unKeepFresher(): void {
  return unbindEvent(RegisteredEventList);
}