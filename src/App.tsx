import { Container } from 'inversify';
import { useAtom } from 'jotai';
import { useContext, useState } from 'react';
import InversifyContainerContext from './InversifyContainerContext';
import { AbstractAtomProvider, AtomProvider } from './providers/AtomProvider';
import { AbstractNameProvider, NameProvider } from './providers/NameProvider';

function HelloName() {
  const container = useContext(InversifyContainerContext);
  return (
    <div>
      <p>{container.get(AbstractNameProvider).display()}</p>
    </div>
  );
}
function HelloAtom() {
  const container = useContext(InversifyContainerContext);
  const provider = container.get(AbstractAtomProvider);
  const [count] = useAtom(provider.countAtom);
  const [, increment] = useAtom(provider.incrementCountAtom);
  const [, decrement] = useAtom(provider.decrementCountAtom);
  return (
    <div className="flex items-center gap-2 p-2">
      <button
        type="button"
        className="rounded border p-2"
        onClick={() => {
          increment();
        }}
      >
        increment +
      </button>
      <p>{count}</p>
      <button
        type="button"
        className="rounded border p-2"
        onClick={() => {
          decrement();
        }}
      >
        decrement -
      </button>
    </div>
  );
}

export default function App() {
  const [container] = useState(() => {
    const container = new Container();
    container.bind(AbstractNameProvider).to(NameProvider).inSingletonScope();
    container.bind(AbstractAtomProvider).to(AtomProvider).inSingletonScope();
    return container;
  });
  return (
    <InversifyContainerContext.Provider value={container}>
      <div className="container mx-auto p-2">
        <HelloName />
        <HelloAtom />
      </div>
    </InversifyContainerContext.Provider>
  );
}
