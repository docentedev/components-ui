import { TokenType } from './tokens.type';
declare const getTokensTexts: (properties: string[], values: {
    [key: string]: string;
}[]) => Record<string, TokenType>;
declare const getTokensTextsClasses: (tokensText: {
    [key: string]: TokenType;
}) => string;
export { getTokensTexts, getTokensTextsClasses };
