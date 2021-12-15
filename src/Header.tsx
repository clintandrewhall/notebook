import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const history = useHistory();
  const onClick = useCallback(() => history.push('/'), [history]);

  return <div>Header</div>;
};
