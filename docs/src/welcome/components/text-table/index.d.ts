import { TokenType } from "../../../tokens/tokens.type";
interface TextsTableProps {
    title: string;
    data: TokenType[];
}
declare const TextsTable: ({ title, data }: TextsTableProps) => JSX.Element;
export default TextsTable;
