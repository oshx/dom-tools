declare type SourceString = string;

declare interface UniqueDOMRequired {
  root: HTMLElement;
  head: HTMLHeadElement;
  body: HTMLBodyElement;
}

declare interface SourceCountMap<T = HTMLElement> {
  [source: SourceString]: T;
}

declare interface UniqueDOMOptional {
  iframe: SourceCountMap<HTMLIFrameElement>;
  script: SourceCountMap<HTMLScriptElement>;
}

declare type UniqueDOM = UniqueDOMRequired & Partial<UniqueDOMOptional>;
