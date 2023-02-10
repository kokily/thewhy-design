import Link from 'next/link';
import Search from '../../common/Search';
import NoticeContents from './NoticeContents';
import {
  ListNoticesButton,
  ListNoticesContainer,
  ListNoticesContents,
  ListNoticesSearchBox,
} from './styles';
import useListNotices from './useListNotices';

export default function ListNotices() {
  const listNotices = useListNotices();

  return (
    <ListNoticesContainer>
      <ListNoticesContents>
        <ListNoticesSearchBox small={listNotices.isMobile ? true : false}>
          {!listNotices.isMobile && listNotices.isLoggedIn && (
            <Link href="/notices/add">
              <ListNoticesButton>공지 작성</ListNoticesButton>
            </Link>
          )}

          <Search
            mode="제목"
            searchRef={listNotices.searchRef}
            onKeyPress={listNotices.onKeyPress}
            onSearch={listNotices.onSearch}
          />
        </ListNoticesSearchBox>

        <NoticeContents
          notices={listNotices.notices}
          onReadNotice={listNotices.onReadNotice}
        />
      </ListNoticesContents>

      <div ref={listNotices.setTarget} />
    </ListNoticesContainer>
  );
}
