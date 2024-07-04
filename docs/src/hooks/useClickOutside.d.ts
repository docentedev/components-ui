import { RefObject } from 'react';
/**
 * Hook that detects clicks outside of a given element
 * and triggers a callback function when that happens.
 *
 * @param {React.RefObject<HTMLElement>} ref - The ref of the element to detect clicks outside of.
 * @param {() => void} callback - The callback function to trigger when a click outside of the element is detected.
 * @example ```tsx
 * import React, { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle dropdown</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}
 * ```
 */
declare const useClickOutside: (ref: RefObject<HTMLElement | undefined>, callback: () => void) => void;
export default useClickOutside;
