export type Countries = 'cl' | 'pe' | 'ar' | 'br' | 'co';
export type CountryProps = {
    country: Countries;
    language?: 'es' | 'en' | 'pt';
    size?: number;
    hiddenText?: boolean;
};
declare const Country: ({ country, language, size, hiddenText }: CountryProps) => JSX.Element;
export default Country;
