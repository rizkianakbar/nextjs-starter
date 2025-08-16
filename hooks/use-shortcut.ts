import { useCallback, useEffect } from 'react';

// Define the type for the shortcuts object
interface Shortcuts {
  [combination: string]: () => void;
}

const useShortcut = (shortcuts: Shortcuts): void => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const pressedKeys: string[] = [];
      if (event.ctrlKey) pressedKeys.push('ctrl');
      if (event.shiftKey) pressedKeys.push('shift');
      if (event.altKey) pressedKeys.push('alt');
      if (event.metaKey) pressedKeys.push('meta'); // For Mac's Command key

      // Add the pressed key, converting it to lowercase
      const key = event.key.toLowerCase();
      // We only add alphanumeric and some common keys to the pressedKeys array
      // to avoid capturing every single key press like CapsLock, Tab, etc.
      if (
        /^[a-z0-9]$/.test(key) ||
        ['enter', 'escape', 'backspace', 'delete', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)
      ) {
        pressedKeys.push(key);
      }

      // Sort the pressed keys to ensure consistent comparison regardless of press order
      pressedKeys.sort();
      const pressedCombination = pressedKeys.join('+');

      // Find a matching shortcut
      for (const combination in shortcuts) {
        if (Object.prototype.hasOwnProperty.call(shortcuts, combination)) {
          const shortcutKeys = combination.toLowerCase().split('+').sort();
          const shortcutCombination = shortcutKeys.join('+');

          if (pressedCombination === shortcutCombination) {
            event.preventDefault(); // Prevent default browser behavior
            shortcuts[combination]();
            break; // Stop checking once a match is found
          }
        }
      }
    },
    [shortcuts], // Recreate the handler if the shortcuts object changes
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); // Add or remove listener if the handler changes
};

export default useShortcut;
