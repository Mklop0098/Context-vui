export type ModalContextProviderReturn = {
    showModal: (modal: ModalType) => void,
    hideModal: () => void,
};

export type ModalType = {
    title?: string,
    body?: any,
    footer?: boolean,
    toggle: boolean,
    width?: number,
    height?: number,
    type?: string,
    root?: string,
    header?: boolean,
    position?: string
};

export type ThemeContextRetrun ={
    theme: string,
    setTheme: (currentTheme: string) => void
}

export type ToastHookReturns ={
    toast: ToastType[]
    addToast: (newToast: ToastType) => void
    removeToast: (id: number) => void,
}

export type ToastType = {
    type: string,
    message: string,
    id?: number
};
