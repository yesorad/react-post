import { useEffect, useState } from 'react';

export default useAsync = (promise, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, serResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promise();
        serResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
};
