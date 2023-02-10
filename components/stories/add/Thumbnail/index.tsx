import { ThumbnailButton, ThumbnailImage } from './styles';

interface Props {
  thumbnail: string;
  onUploadThumbnail: () => void;
}

export default function Thumbnail({ thumbnail, onUploadThumbnail }: Props) {
  return thumbnail ? (
    <ThumbnailImage src={thumbnail} alt="썸네일" />
  ) : (
    <ThumbnailButton onClick={onUploadThumbnail}>썸네일 업로드</ThumbnailButton>
  );
}
