import Image from 'next/image';
import {
  ServiceBodyContainer,
  ServiceBodyRow,
  ServiceBodyCol,
  ServiceBodyList,
  ServiceBodyItem,
} from './styles';

interface Props {
  list: Array<ListType>;
}

export default function ServiceBody({ list }: Props) {
  return (
    <ServiceBodyContainer>
      {list.map((item, i) => (
        <ServiceBodyRow key={i}>
          <ServiceBodyCol>
            <Image
              src={`/images/education/${item.img}.png`}
              alt="서비스 커뮤니케이션"
              width={100}
              height={104}
            />
          </ServiceBodyCol>

          <ServiceBodyList className={item.end ? 'end' : undefined}>
            {item.list.map((data, j) => (
              <ServiceBodyItem key={j}>{data}</ServiceBodyItem>
            ))}
          </ServiceBodyList>
        </ServiceBodyRow>
      ))}
    </ServiceBodyContainer>
  );
}
