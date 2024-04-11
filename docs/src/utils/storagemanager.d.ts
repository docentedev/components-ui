declare const storageManager: <T = unknown>(storageKey: string) => (dataName: string, initialModel?: T | undefined) => {
    get: () => {
        model: T;
        datetime: Date;
    };
    set: (model: T) => void;
    clear: () => void;
    setWithTimeout: (model: T, timeoutMs: number, callback: () => void) => void;
};
export default storageManager;
