interface TranslatorAdapterInterface {
    setup(): Promise<any>;

    translate: () => (key: string) => string;
}

export default TranslatorAdapterInterface;
