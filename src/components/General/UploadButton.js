import { Button } from 'react-bootstrap'
import { useRef, useState } from 'react';

function UploadButton(props) {
  const inputRef = useRef(null);

  const [fileName, setFileName] = useState('');

  const handleUpload = () => {
    inputRef.current.value = ""
    inputRef.current?.click();
  };

  const handleUploadedFile = (e) => {
    if (inputRef.current?.files && inputRef.current?.files.length) {
      const uploaded_file = inputRef.current?.files[0];
      if(props.showFileName) {
        setFileName(inputRef.current?.files[0].name)
      }
      props.onSuccessFullUpload(uploaded_file)
    }
  }

  return (
    <>
      {/* Make required upload button */}
      <input
        ref={inputRef}
        accept={props.accept || '*'}
        className="d-none"
        // required={props.required|| null}
        type="file"
        onChange={(e) => {handleUploadedFile(e)}}
      />
      <Button
        className="p-2"
        variant={props.buttonColor || "outline-danger rounded-0 me-2"}
        size="sm"
        onClick={handleUpload}

        >
        {props.buttonTitle || 'Upload'}
      </Button>
      {
        props.showFileName &&
        <span>{fileName}</span>
      }
    </>
  );
}

export default UploadButton;
