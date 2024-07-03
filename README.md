# @oshx/dom-tools

[![Node.js Package](https://github.com/oshx/dom-tools/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/oshx/dom-tools/actions/workflows/npm-publish.yml)

Trivial shorthand tool for specific fits.

## Installation
```sh
~$ npm i @oshx/dom-tools
```

## APIs
### Once-series
```typescript
import { onceIframe, onceScript } from '@oshx/dom-tools';

onceIframe('app://scheme');

onceIframe('https://deeplink.page');

onceScript('https://lib.site/temp/logger.js');
```

### Unique DOM
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
```typescript
import { REGEXP_VALID_URI, REGEXP_VALID_PATH } from '@oshx/dom-tools';

// Regular Expressions
REGEXP_VALID_URI.test('https://hostname:port/path/?searchParams');
REGEXP_VALID_PATH.test('./path/to/valid');
```

### Types
```typescript
import { UniqueDOM } from '@oshx/dom-tools/@types';
```

## For fun!
It made for fun to me.
Honestly, I made it for trying to use 'rollup'.

```
initial created at 2023-03-10
```