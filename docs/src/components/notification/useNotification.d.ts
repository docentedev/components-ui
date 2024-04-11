import { Data } from './index';
declare const useNotification: () => {
    items: Data[];
    add: (item: Data) => void;
};
export default useNotification;
