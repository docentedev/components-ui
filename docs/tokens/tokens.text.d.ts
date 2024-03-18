import { tokenType } from './tokens.type';
declare const getTokensTexts: (properties: string[], values: {
    [key: string]: string;
}[]) => Record<string, tokenType>;
declare const getTokensTextsClasses: (tokensText: {
    [key: string]: tokenType;
}) => string;
export { getTokensTexts, getTokensTextsClasses };
