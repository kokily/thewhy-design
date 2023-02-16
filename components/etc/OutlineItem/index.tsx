import { FcCheckmark } from 'react-icons/fc';
import {
  FirstPane,
  OutlineContainer,
  OutlineTitle,
  SecondPane,
} from './styles';

interface Props {
  body: OutlineType;
}

export default function OutlineItem({ body }: Props) {
  return (
    <OutlineContainer>
      <OutlineTitle>{body.title}</OutlineTitle>

      {body.first &&
        body.first.length > 0 &&
        body.first.map((obj) => (
          <FirstPane>
            <span key={obj.id}>
              <FcCheckmark /> <span>{obj.firstTitle}</span>
            </span>
            {obj.firstChild &&
              obj.firstChild.length > 0 &&
              obj.firstChild.map((second) => (
                <SecondPane key={second.secondTitle}>
                  <p className="second_title">{second.secondTitle}</p>
                  {second.secondChild &&
                    second.secondChild.length > 0 &&
                    second.secondChild.map((child) => (
                      <pre key={child} className="second_child">
                        {child}
                      </pre>
                    ))}
                </SecondPane>
              ))}
          </FirstPane>
        ))}
    </OutlineContainer>
  );
}
