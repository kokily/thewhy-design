import Image from 'next/image';
import ContactInfo from './ContactInfo';
import SendMail from './SendMail';
import { ContactContainer, ContactContents } from './styles';
import useSendMail from './useSendMail';

export default function Contact() {
  const sendMail = useSendMail();

  return (
    <ContactContainer>
      <Image
        src="/images/about/about.png"
        alt="Contact us"
        width={1110}
        height={297}
      />

      <ContactContents>
        <SendMail
          name={sendMail.name}
          email={sendMail.email}
          subject={sendMail.subject}
          body={sendMail.body}
          onChange={sendMail.onChange}
          onClear={sendMail.onClear}
          onSubmit={sendMail.onSubmit}
        />
        <ContactInfo />
      </ContactContents>
    </ContactContainer>
  );
}
