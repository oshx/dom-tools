# @oshx/dom-tools
This is a vanilla TypeScript helper tool.
You can do it with this library.

## Prerequisites
```
SuperSet Language - TypeScript
Package Manager - Yarn
```

## Installation
```sh
~$ yarn add @oshx/dom-tools
# Enjoy with it!
```

## APIs
### Once-series
```typescript
import { onceInlineFrame, onceScript } from '@oshx/dom-tools';

onceInlineFrame('app://scheme');
onceInlineFrame('https://deeplink.page');

onceScript('https://code.jquery.com/jquery-1.12.4.min.js');
```

### Core
```typescript
import { REGEXP_VALID_URI } from '@oshx/dom-tools';

REGEXP_VALID_URI.test('https://hostname:port/path/?searchParams');
// REGEXP_VALID_PATH
// REGEXP_SPACE
```

### Types
```typescript
import { InnerDOM } from '@oshx/dom-tools/@types';
```

## For fun!
Install it with me!

```
created at 2023-03-10
```