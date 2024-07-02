# @oshx/dom-tools
Trivial shorthand tool for specific fits.

## Installation
```sh
~$ npm i @oshx/dom-tools
# Enjoy with it!
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

### Core
```typescript
import { REGEXP_VALID_URI } from '@oshx/dom-tools';

// Regular Expressions
REGEXP_VALID_URI.test('https://hostname:port/path/?searchParams');
```

### Types
```typescript
import { UniqueDOM } from '@oshx/dom-tools/@types';
```

## For fun!
Install it with me!

```
initial created at 2023-03-10
```