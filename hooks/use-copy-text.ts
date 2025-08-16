import { useCallback, useState } from 'react';

interface UseCopyTextOptions {
  /**
   * The time in milliseconds the 'copied' state should be true after copying.
   * Defaults to 2000ms (2 seconds).
   */
  successDuration?: number;
}

interface UseCopyTextResult {
  /**
   * Function to call to copy the provided text.
   */
  copy: (text: string) => Promise<void>;
  /**
   * A boolean indicating whether the text was successfully copied recently.
   */
  copied: boolean;
  /**
   * An error object if the copy operation failed.
   */
  error: Error | null;
}

const useCopyText = (options?: UseCopyTextOptions): UseCopyTextResult => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const successDuration = options?.successDuration ?? 2000; // Default to 2 seconds

  const copy = useCallback(
    async (text: string) => {
      setError(null); // Clear any previous errors
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), successDuration);
        } else {
          // Fallback for older browsers or non-secure contexts
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed'; // Avoid scrolling to bottom
          textarea.style.opacity = '0'; // Hide the textarea
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();

          try {
            const successful = document.execCommand('copy');
            if (successful) {
              setCopied(true);
              setTimeout(() => setCopied(false), successDuration);
            } else {
              throw new Error('Fallback copy failed.');
            }
          } catch (err) {
            console.error('Fallback copy failed:', err);
            throw new Error('Copying to clipboard not supported in this browser or context.');
          } finally {
            document.body.removeChild(textarea);
          }
        }
      } catch (err: unknown) {
        setError(err as Error);
        console.error('Failed to copy text:', err);
      }
    },
    [successDuration], // Recreate 'copy' function if successDuration changes
  );

  return { copy, copied, error };
};

export default useCopyText;
