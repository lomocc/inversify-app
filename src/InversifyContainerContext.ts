import { Container } from "inversify";
import React from "react";

const InversifyContainerContext = React.createContext<Container>(
  (undefined as unknown) as Container
);

InversifyContainerContext.displayName = "InversifyContainerContext";

export default InversifyContainerContext;
