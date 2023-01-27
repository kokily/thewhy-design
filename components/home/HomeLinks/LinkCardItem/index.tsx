import Link from 'next/link';
import {
  LinkCardItemCard,
  LinkCardItemContainer,
  LinkCardItemContents,
  LinkCardItemImage,
  LinkCardItemLead,
  LinkCardItemTitle,
} from './styles';

interface Props {
  link: MainLinkType;
}

export default function ListCardItem({ link }: Props) {
  return (
    <LinkCardItemContainer>
      <LinkCardItemCard>
        <Link href={link.url}>
          <LinkCardItemImage src={link.img} alt={link.title} />
        </Link>

        <LinkCardItemContents>
          <LinkCardItemTitle>
            <Link href={link.url}>
              <a>{link.title}</a>
            </Link>
          </LinkCardItemTitle>

          <LinkCardItemLead>{link.sub}</LinkCardItemLead>
        </LinkCardItemContents>
      </LinkCardItemCard>
    </LinkCardItemContainer>
  );
}
