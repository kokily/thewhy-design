import formatDate from '../../../libs/utils/formatDate';
import Markdown from '../../common/Markdown';
import ReadButtons from '../../common/ReadButtons';
import { NoticeContainer, NoticeDateBox, NoticeLayout } from './styles';
import useReadNotice from './useReadNotice';

export default function ReadNotice() {
  const readNotice = useReadNotice();

  return (
    readNotice.notice && (
      <NoticeContainer>
        <ReadButtons
          modal={readNotice.removeModal}
          onRemoveClick={readNotice.onRemoveClick}
          onConfirm={readNotice.onConfirm}
          onCancel={readNotice.onCancel}
          onUpdate={readNotice.onUpdateNotice}
        />

        <NoticeLayout>
          <NoticeDateBox>
            <h4>{`${formatDate(
              readNotice.notice.createdAt.toString()
            )} 작성`}</h4>
          </NoticeDateBox>
        </NoticeLayout>

        <NoticeLayout>
          <Markdown markdown={readNotice.notice.body} />
        </NoticeLayout>
      </NoticeContainer>
    )
  );
}
