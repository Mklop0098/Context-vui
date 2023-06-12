import React from 'react';
import './style.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { ImEnlarge } from 'react-icons/im';


type ShowImageProps = {
  state: any,
  onClick: () => void,
  canEnlarge: boolean
}

export const ShowImage:React.FC<ShowImageProps> = (props) =>
{
    const { state, onClick, canEnlarge } = props;
    return (
        <div className="upload__img">
            <img
                src={state.image}
                alt="pic"
            />
            <div className='hover-modal'>
                <div
                    style={{ visibility: `${!canEnlarge ? 'hidden' : 'visible'}` }}
                    onClick={onClick}
                >
                    <ImEnlarge color="var(--color)" />
                </div>
                <div className="upload__change-image">
                    <label htmlFor="upload">
                        <div className="upload-change__btn">
                            <div>
                                <FaCloudUploadAlt
                                    size={28}
                                    color='var(--success-color)'
                                />
                            </div>
                            <span>Upload Image</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};
