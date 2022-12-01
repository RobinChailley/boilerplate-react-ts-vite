interface BaseHttpAdapterInterface {
  get(path: string, args: RequestInit): Promise<Response>;

  delete(path: string, args: RequestInit): Promise<Response>;

  post(path: string, body: Body, args: RequestInit): Promise<Response>;

  put(path: string, body: Body, args: RequestInit): Promise<Response>;
}

export default BaseHttpAdapterInterface;
