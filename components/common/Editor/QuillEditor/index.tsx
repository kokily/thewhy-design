import { useCallback, useEffect, useRef, useMemo } from 'react';
import { imageUpdate } from '../../../../libs/utils/imageUpdate';
import { EditorContainer } from './styles';
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

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ],
        ImageDrop: true,
      },
      syntax: true,
      keyboard: {
        bindings: {
          tab: {
            key: 9,
            handler: function () {
              return true;
            },
          },
          enter: {
            key: 13,
            handler: function () {
              return true;
            },
          },
        },
      },
    }),
    []
  );

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
