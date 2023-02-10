import EditorFooter from '../../common/Editor/EditorFooter';
import EditorTitle from '../../common/Editor/EditorTitle';
import QuillEditor from '../../common/Editor/QuillEditor';
import {
  AddNoticeContainer,
  AddNoticeEditorBox,
  AddNoticeWrapper,
} from './styles';
import useAddNotice from './useAddNotice';

export default function AddNotice() {
  const addNotice = useAddNotice();

  return (
    <AddNoticeContainer>
      <AddNoticeEditorBox>
        <AddNoticeWrapper>
          <EditorTitle
            placeholder="제목을 입력하세요"
            value={addNotice.title}
            onChange={addNotice.onChangeTitle}
          />

          <QuillEditor
            body={addNotice.body}
            onChangeBody={addNotice.onChangeBody}
          />
        </AddNoticeWrapper>

        <EditorFooter
          onBack={addNotice.onBack}
          onSubmit={addNotice.onAddNotice}
        />
      </AddNoticeEditorBox>
    </AddNoticeContainer>
  );
}
