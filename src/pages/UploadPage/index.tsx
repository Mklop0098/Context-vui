import { UploadImage } from '../../components/UploadImage/UploadImage';
import { useLanguage } from '../../contexts/LanguageContext';
import './style.css';

export const UploadPage = () =>
{
    const { t } = useLanguage();
    return (
        <div className='upload-img'>
            <div style={{ color: 'var(--color' }}>
                <h1>UploadImage</h1>
                <span>{`${t('UploadImage cho phép người dùng tải hình ảnh lên, đồng thời có thể thực hiện các thao tác như thay đổi hình ảnh, phóng to hình ảnh hoặc tải hình ảnh về máy')}`}
                </span>
                <UploadImage
                    canEnlarge
                />
            </div>
        </div>
    );
};
