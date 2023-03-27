import { useState } from "react";

import { createContainer } from "unstated-next";

function useModalState(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return [isOpen, { open, close }] as const;
}

export const {
  Provider: ModalStateProvider,
  useContainer: useModalStateContiner,
} = createContainer(useModalState);