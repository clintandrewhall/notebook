import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';

export const Header = () => {
  const history = useHistory();
  const onClick = useCallback(() => history.push('/'), [history]);

  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo onClick={onClick} iconType="apps">
          Clint's Notebook
        </EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="Links">
          <EuiHeaderLink
            iconType="editorCodeBlock"
            href="https://github.com/clintandrewhall/notebook"
            target="_blank">
            Source
          </EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};
