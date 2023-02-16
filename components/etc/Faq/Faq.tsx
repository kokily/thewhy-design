import Accordion from '../../common/Accordion';
import { FaqContainer } from './styles';

export default function Faq() {
  return (
    <FaqContainer>
      <h2>
        Frequently Asked <strong>Questions</strong>
      </h2>

      <Accordion title="title1" body="어코디언 1번" />
    </FaqContainer>
  );
}
