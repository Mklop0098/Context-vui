import { UploadImage } from '../../components/UploadImage/UploadImage';
import './style.css';

export const UploadPage = () =>
{
    return (
        <div id='img-root'>
            <div>
                <UploadImage
                    canEnlarge
                />
            </div>
        </div>
    );
};
