import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Test component
export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const onThrowError = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  });

  return (
    <Button onClick={onThrowError}>
      throw error
    </Button>
  );
};
