import React, { useEffect, useState } from 'react';
import './style.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { ShowImage } from './ShowImg';
import { useModal } from '../../contexts/ModalContext';
import { AiOutlineDownload } from 'react-icons/ai';
import { getBase64 } from '../../ultil';
import { saveAs } from 'file-saver';
import { MdCancel } from 'react-icons/md';

type UploadImageProps = {
  src?: string,
  onChange?: (data: ChangeData) => void,
  canEnlarge: boolean
}

type ChangeData = {
  base64: any,
  imgUrl: string,
  file: File,
  fileName: string,
}

export const UploadImage:React.FC<UploadImageProps> = (props) =>
{

    const { src, onChange, canEnlarge } = props;
    const [state, setState] = useState({ image: '', imageVisible: false, toggle: false });
    const { showModal, hideModal } = useModal();

    const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>, url: string) =>
    {
        if (e.target.files && onChange)
        {
            const file = e.target.files[0];
            const result = await getBase64(file);
            onChange({
                base64: result,
                imgUrl: url,
                file: file,
                fileName: file.name,
            });
        }
    };

    useEffect(() =>
    {
        if (src)
        {
            setState({ ...state, 'imageVisible': true, 'image': src });
        }
    }, []);

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (event.target.files && event.target.files[0])
        {
            const img = event.target.files[0];
            const currentImage = URL.createObjectURL(img);
            setState(prevState => ({ ...prevState, imageVisible: true, image: currentImage }));
            handleFileInputChange(event, currentImage);
        }
    };

    const downloadImage = () =>
    {
        saveAs(state.image, 'img.png');
    };

    const showEnLargeImage = () =>
    {
        showModal({
            toggle: true,
            body: (
                <div
                    style={{ backgroundImage: `url(${state.image})` }}
                    className='modal-block__body'
                >
                    <button onClick={downloadImage}>
                        <AiOutlineDownload />
                    </button>
                    <button onClick={hideModal}>
                        <MdCancel />
                    </button>
                </div>
            ),
            width: 60,
            height: 70,
            type: 'enlarge',
            root: 'modal-root',
        });
    };


    return (
        <div className="upload-img__container">
            <input
                type="file"
                id="upload"
                accept="image/*"
                hidden
                onChange={e => handleChangeImage(e)}
            />

            <div className="upload-site">
                {!state.imageVisible
                    ? (
                        <label htmlFor="upload">
                            <div className="upload__btn">
                                <AiOutlinePlus
                                    size={24}
                                    fontWeight={700}
                                />
                            </div>
                        </label>
                    )
                    : (
                        <ShowImage
                            state={state}
                            canEnlarge={canEnlarge}
                            onClick={showEnLargeImage}
                        />
                    )
                }
            </div>
        </div>
    );
};
