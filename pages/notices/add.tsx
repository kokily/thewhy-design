import type { NextPage } from 'next';
import AddNotice from '../../components/notices/add/AddNotice';
import useLogged from '../../libs/hooks/useLogged';

const AddNoticePage: NextPage = () => {
  useLogged();

  return <AddNotice />;
};

export default AddNoticePage;
