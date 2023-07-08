/// <reference types="node" />
import crypto, { KeyObject } from 'crypto';
import type { TapoDeviceKey } from './types';
export declare const generateKeyPair: () => Promise<crypto.KeyPairKeyObjectResult>;
export declare const encrypt: (data: any, deviceKey: TapoDeviceKey) => string;
export declare const decrypt: (data: string, deviceKey: TapoDeviceKey) => any;
export declare const readDeviceKey: (pemKey: string, privateKey: KeyObject) => Buffer;
export declare const base64Encode: (data: string) => string;
export declare const base64Decode: (data: string) => string;
export declare const shaDigest: (data: string) => string;
