interface ILogoutInterface {
  execute(): Promise<Error | void>;
}

export default ILogoutInterface;
