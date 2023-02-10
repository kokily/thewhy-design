import EditorFooter from '../../common/Editor/EditorFooter';
import EditorTitle from '../../common/Editor/EditorTitle';
import QuillEditor from '../../common/Editor/QuillEditor';
import {
  AddStoryContainer,
  AddStoryContents,
  AddStoryEditorBox,
  AddStoryTagsBox,
  ThumbnailBox,
} from './styles';
import TagBox from './TagBox';
import useTags from './TagBox/useTags';
import Thumbnail from './Thumbnail';
import useAddStory from './useAddStory';

export default function AddStory() {
  const addStory = useAddStory();
  const addTags = useTags({
    tags: addStory.tags,
    onChangeTags: addStory.onChangeTags,
  });

  return (
    <AddStoryContainer>
      <AddStoryEditorBox>
        <AddStoryContents>
          <EditorTitle
            placeholder="제목을 입력하세요."
            value={addStory.title}
            onChange={addStory.onChangeTitle}
          />

          <AddStoryTagsBox>
            <TagBox
              input={addTags.input}
              localTags={addTags.localTags}
              onRemoveTag={addTags.onRemoveTag}
              onChangeText={addTags.onChangeText}
              onSetTags={addTags.onSetTags}
            />
          </AddStoryTagsBox>

          <ThumbnailBox>
            <Thumbnail
              thumbnail={addStory.thumbnail}
              onUploadThumbnail={addStory.onUploadThumbnail}
            />
          </ThumbnailBox>

          <QuillEditor
            body={addStory.body}
            onChangeBody={addStory.onChangeBody}
          />
        </AddStoryContents>

        <EditorFooter onBack={addStory.onBack} onSubmit={addStory.onAddStory} />
      </AddStoryEditorBox>
    </AddStoryContainer>
  );
}
