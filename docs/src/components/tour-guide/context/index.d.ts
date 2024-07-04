import { tourGuideDispatch } from '../index.utils';
export type Tour = {
    dispatch?: ReturnType<typeof tourGuideDispatch>;
};
export type Tours = {
    [key: string]: Tour;
};
declare const ctx: import("react").Context<{
    getTour: (tour: string) => Tour;
} | null>;
export default ctx;
