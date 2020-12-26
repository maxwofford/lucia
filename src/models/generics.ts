export const DIRECTIVE_PREFIX = 'l-';
export const LUCIA_FIRST_RENDER = '%LUCIA_FIRST_RENDER%';
export enum DIRECTIVE_SHORTHANDS {
  '@' = 'on',
  ':' = 'bind',
}

export type UnknownKV = Record<string, unknown>;
export type StringKV = Record<string, string>;