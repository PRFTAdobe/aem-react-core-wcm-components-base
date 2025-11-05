import jestFetchMock from 'jest-fetch-mock';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
jestFetchMock.enableMocks();
