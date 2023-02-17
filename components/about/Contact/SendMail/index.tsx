import type { ChangeEvent, SyntheticEvent } from 'react';
import { MailContainer, MailForm, MailButton } from './styles';

interface Props {
  name: string;
  email: string;
  subject: string;
  body: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClear: () => void;
  onSubmit: (e: SyntheticEvent) => void;
}

export default function SendMail({ ...rest }: Props) {
  return (
    <MailContainer>
      <h2>메일 보내기</h2>

      <p>Email로 문의를 보내주세요~!</p>

      <MailForm>
        <div className="row sep">
          <div>
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={rest.name}
              onChange={rest.onChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={rest.email}
              onChange={rest.onChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <label>문서제목</label>
          <input
            type="text"
            name="subject"
            value={rest.subject}
            onChange={rest.onChange}
            required
          />
        </div>
        <div className="row">
          <label>문의 내용</label>
          <textarea
            rows={8}
            name="body"
            value={rest.body}
            onChange={rest.onChange}
            required
          />
        </div>

        <div className="row">
          <MailButton onClick={rest.onSubmit}>전송하기</MailButton>
          <MailButton red onClick={rest.onClear}>
            초기화
          </MailButton>
        </div>
      </MailForm>
    </MailContainer>
  );
}
