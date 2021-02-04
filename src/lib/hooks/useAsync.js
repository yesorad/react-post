import { useCallback, useEffect, useState } from 'react';

export default function useAsync(promiseCreator, deps) {
  const [loding, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useCallback(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loding, resolved, error];
}
