import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Modal } from '../components/Modal';
import { ModalContextProviderReturn, ModalType } from './type';


export const ModalContext = createContext<ModalContextProviderReturn>({} as ModalContextProviderReturn);

export const useModal = (): ModalContextProviderReturn =>
{
    return useContext(ModalContext);
};


export const ModalContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [modal, setModal] = useState<ModalType>({} as ModalType);

    const hideModal = () =>
    {
        setModal({ ...modal, 'toggle': false });
    };

    const showModal = (modal: ModalType) =>
    {
        setModal(modal);
    };
    
    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {props.children}
            <Modal
                toggle={modal.toggle}
                root={'modal-root'}
                title={modal.title || undefined}
                body={modal.body}
                footer={modal.footer || undefined}
                width={modal.width || 20}
                height={modal.height || 25}
                type={modal.type || 'notify'}
                onClick={hideModal}
            />
        </ModalContext.Provider>
    );
};
