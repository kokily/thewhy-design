import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { EditorTitleStyle } from './styles';

const EditorTitle = styled(TextareaAutosize)`
  ${EditorTitleStyle}
`;

export default EditorTitle;
