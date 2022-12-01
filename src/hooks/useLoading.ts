import React, { useEffect, useState } from 'react';

const useLoading = (componentDidMount: Function, deps: React.DependencyList = []): boolean => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await componentDidMount();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return loading;
};

export default useLoading;
