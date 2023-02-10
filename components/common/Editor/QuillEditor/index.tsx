import { useCallback, useEffect, useRef } from 'react';
import { imageUpdate } from '../../../../libs/utils/imageUpdate';
import { EditorContainer } from './styles';
import { modules } from '../config';
import 'react-quill/dist/quill.snow.css';
import DragDrop from '../DragDrop';

interface Props {
  body: string;
  onChangeBody: (text: string) => void;
}

export default function QuillEditor({ body, onChangeBody }: Props) {
  const Quill = typeof window === 'object' ? require('quill') : () => false;
  const quillEl = useRef(null);
  const quillInst = useRef(null);

  const onClickImageButton = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const target = await imageUpdate(file);
      const range = quillInst.current.getSelection(true);

      quillInst.current.insertEmbed(range.index, 'image', target);
      quillInst.current.setSelection(range.index + 1);
    };
    upload.click();
  };

  const onDragDropUpload = useCallback(async (file: File) => {
    const target = await imageUpdate(file);
    const range = quillInst.current.getSelection(true);

    quillInst.current.insertEmbed(range.index, 'image', target);
    quillInst.current.setSelection(range.index + 1);
  }, []);

  useEffect(() => {
    quillInst.current = new Quill(quillEl.current, {
      theme: 'snow',
      placeholder: '공지사항 내용을 입력하세요.',
      modules,
    });

    const quill = quillInst.current;

    quill.on('text-change', () => {
      onChangeBody(quill.root.innerHTML);
    });

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', onClickImageButton);
  }, []);

  const mounted = useRef(null);

  useEffect(() => {
    if (mounted.current) return;

    if (body) {
      mounted.current = true;
      quillInst.current.root.innerHTML = body;
    }
  }, [body]);

  return (
    <>
      <EditorContainer>
        <div ref={quillEl} style={{ border: 'none' }} />
      </EditorContainer>

      <DragDrop onDragDropUpload={onDragDropUpload} />
    </>
  );
}
