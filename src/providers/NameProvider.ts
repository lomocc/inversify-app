import { injectable } from 'inversify';

export abstract class AbstractNameProvider {
  abstract display(): string;
}

@injectable()
export class NameProvider implements AbstractNameProvider {
  display() {
    return 'World';
  }
}
