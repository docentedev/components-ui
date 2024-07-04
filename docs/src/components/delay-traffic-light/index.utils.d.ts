import { DelayTrafficLightProps, Level } from '.';
declare const dateToFormat: (date: number) => string;
declare const compareDates: (dateA: Date, dateB: Date, delay: string) => boolean;
declare const compareToComponent: (props: DelayTrafficLightProps, dateA: Date, dateB: Date) => Level;
export { compareDates, compareToComponent, dateToFormat };
