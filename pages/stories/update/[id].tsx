import type { NextPage } from 'next';
import AddStory from '../../../components/stories/add/AddStory';
import useLogged from '../../../libs/hooks/useLogged';

const UpdateStoryPage: NextPage = () => {
  useLogged();

  return <AddStory />;
};

export default UpdateStoryPage;
