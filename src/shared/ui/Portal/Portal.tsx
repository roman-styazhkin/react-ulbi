import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    container?: DocumentFragment;
}

export const Portal: FC<PortalProps> = (props) => {
  const {
    children,
    container = document.body,
  } = props;

  return createPortal(children, container);
};
