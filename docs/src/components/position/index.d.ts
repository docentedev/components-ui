type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around' | 'initial' | 'inherit' | 'end';
type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'end';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type MarginSize = 0 | 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 2 | 2.5 | 3 | 4;
type PaddingSize = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4;
type GapSize = 0 | 0.125 | 0.25 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 4;
type FullHeight = boolean;
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit';
export type PositionProps = {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    marginTop?: MarginSize;
    marginBottom?: MarginSize;
    gap?: GapSize;
    direction?: Direction;
    fullHeight?: FullHeight;
    paddingLeft?: PaddingSize;
    paddingRight?: PaddingSize;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    flexWrap?: FlexWrap;
};
declare const Position: (props: PositionProps) => JSX.Element;
export default Position;