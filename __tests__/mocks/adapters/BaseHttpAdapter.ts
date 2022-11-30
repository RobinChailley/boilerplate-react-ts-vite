import BaseHttpAdapterInterface from '@adapters/interfaces/BaseHttpAdapterInterface';

class BaseHttpAdapter implements BaseHttpAdapterInterface {
    private error: any = null;

    private json: any = null;

    get(): Promise<Response> {
        return this.handleResponse();
    }

    post(): Promise<Response> {
        return this.handleResponse();
    }

    put(): Promise<Response> {
        return this.handleResponse();
    }

    delete(): Promise<Response> {
        return this.handleResponse();
    }

    mockError(error: any) {
        this.error = error;
        this.json = [];
    }

    mockJson(json: any) {
        this.json = json;
        this.error = null;
    }

    private handleResponse(): Promise<Response> {
        if (this.error) {
            throw this.error;
        }

        return Promise.resolve(this.json);
    }
}

export default BaseHttpAdapter;
