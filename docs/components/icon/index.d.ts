import Icons from "./icons";
import { PointerEvents } from "./index.type";
export type IconProps = {
    pointerEvents?: PointerEvents;
    color?: string;
    size?: number;
    name?: keyof typeof Icons;
    animation?: 'rotate' | 'asc' | 'desc';
    variant?: 'rounded-edge-box' | 'tag';
};
declare const Icon: ({ color, size, pointerEvents, name, animation, variant, }: IconProps) => JSX.Element;
export default Icon;
