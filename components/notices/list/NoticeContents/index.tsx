import type { Notice } from '@prisma/client';
import { NoticesContainer } from './styles';

interface Props {
  notices: Array<Notice>;
  onReadNotice: (id: number) => void;
}

export default function NoticeContents({ notices, onReadNotice }: Props) {
  return (
    <NoticesContainer>
      <thead>
        <tr>
          <th>No.</th>
          <th>제 목</th>
          <th>작성일</th>
        </tr>
      </thead>

      <tbody>
        {notices.length === 0 ? (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={3}>
              작성된 공지사항이 없습니다.
            </td>
          </tr>
        ) : (
          notices.map((notice) => (
            <tr key={notice.id} onClick={() => onReadNotice(notice.id)}>
              <td style={{ textAlign: 'center' }}>{notice.id}</td>
              <td>{notice.title}</td>
              <td style={{ textAlign: 'center' }}>
                {new Date(
                  new Date(notice.createdAt).getTime() + 9 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </NoticesContainer>
  );
}
