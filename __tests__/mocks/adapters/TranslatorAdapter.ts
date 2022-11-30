import TranslatorAdapterInterface from '@adapters/interfaces/TranslatorAdapterInterface';

class TranslatorAdapter implements TranslatorAdapterInterface {
    setup = async (): Promise<any> => {

    };

    translate = (): (key: string) => string => {
        return (key: string) => key;
    };
}

export default TranslatorAdapter;
