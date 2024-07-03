# @oshx/dom-tools

[![Node.js Package](https://github.com/oshx/dom-tools/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/oshx/dom-tools/actions/workflows/npm-publish.yml)

Trivial shorthand tool for specific fits.

## Installation
```sh
~$ npm i @oshx/dom-tools
```

## APIs
### Once-series

`onceIframe`

Hidden iframe will be created temporarily.

Imagine this situation. You have role in web development, and your web application will be launched in a webview of that
app. Sometimes, you should call some `appscheme` or `deeplink` in your hidden iframe.

It should be useful!

`onceScript`

Script file called with memoized.

You can use that while dynamic import with legacy javascript files. Sometimes you can use that with logging.

```typescript
import { onceIframe, onceScript } from '@oshx/dom-tools';

onceIframe('app://scheme');
// call that app scheme then iframe will be disappeared after 300 miliseconds

onceIframe('https://deeplink.page', 100);
// call that deeplink page then iframe will be disappeared after 100 miliseconds

onceScript('https://lib.site/temp/logger.js');
```

### Unique DOM

It has objects like html, head, body. And you can check your `once` series called list.

```typescript
import { uniqueDOM } from '@oshx/dom-tools';

/** 
 * uniqueDOM {
 *  root
 *  head
 *  body
 *  iframe {
 *   [...iframeSrcs...]: <...iframe elements...>
 *  }
 *  script {
 *   [...scriptSrcs...]: <...script elements...>
 *  }
 * }
 */
```

### Constants

It contains some trivial Regular Expressions.

```typescript
import { REGEXP_VALID_URI, REGEXP_VALID_PATH } from '@oshx/dom-tools';

// Regular Expressions
REGEXP_VALID_URI.test('https://hostname:port/path/?searchParams');
REGEXP_VALID_PATH.test('./path/to/valid');
```

### Types

Do you need assistance?

```typescript
import { UniqueDOM } from '@oshx/dom-tools/@types';
```

## For fun!
It made for fun to me.
Honestly, I made it for trying to use 'rollup'.

```
initial created at 2023-03-10
```