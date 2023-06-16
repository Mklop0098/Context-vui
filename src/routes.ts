import { Fragment } from 'react';
import { ToastPage } from './pages/ToastPage';
import { ModalPage } from './pages/ModalPage';
import { UploadPage } from './pages/UploadPage';
import { DefaultSelectPage } from './pages/AdvanceSelectPage/Default';
import { DisableSelectPage } from './pages/AdvanceSelectPage/Disable';
import { MultipleSelectPage } from './pages/AdvanceSelectPage/Multiple';


export const publicRoutes = [
    { path: '/', component: Fragment },
    { path: '/toast', component: ToastPage },
    { path: '/modal', component: ModalPage },
    { path: '/upload', component: UploadPage },
    { path: '/select', component: DefaultSelectPage },
    { path: '/select-disable', component: DisableSelectPage },
    { path: '/select-multiple', component: MultipleSelectPage },

];

export const privateRoutes = [];
