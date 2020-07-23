export default interface IHashProvider {
  generatehash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
