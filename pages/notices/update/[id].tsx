import type { NextPage } from 'next';
import AddNotice from '../../../components/notices/add/AddNotice';
import useLogged from '../../../libs/hooks/useLogged';

const UpdateNoticePage: NextPage = () => {
  useLogged();

  return <AddNotice />;
};

export default UpdateNoticePage;
