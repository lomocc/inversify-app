import { injectable } from 'inversify';
import { atom, PrimitiveAtom, WritableAtom } from 'jotai';

export abstract class AbstractAtomProvider {
  abstract countAtom: PrimitiveAtom<number>;
  abstract incrementCountAtom: WritableAtom<null, unknown>;
  abstract decrementCountAtom: WritableAtom<null, unknown>;
}

@injectable()
export class AtomProvider implements AbstractAtomProvider {
  countAtom = atom(0);
  incrementCountAtom = atom(null, (get, set, _arg) =>
    set(this.countAtom, get(this.countAtom) + 1)
  );
  decrementCountAtom = atom(null, (get, set, by) =>
    set(this.countAtom, get(this.countAtom) - 1)
  );
}
