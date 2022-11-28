import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Reset.scss';
import '../styles/wrap_Main_Info.scss';
import '../styles/Photo.scss';
import '../styles/Admin.scss';
import '../styles/AdminGlobal.scss';
import '../styles/Result.scss';
import '../styles/Survey.scss';
import '../styles/Modal.css';
import 'antd/dist/antd.css';
import '../styles/error.css';
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import NextNProgress from 'nextjs-progressbar'
import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router'

let defaultState = {
  categoryObj: {},
  productObj: {},
  categoryKo: '',
  categoryEn: '',
  productKo: '',
  productEn: '',
  descriptionKo: '',
  descriptionEn: '',
  checkOnly: false,
  carryOn: false,
  isOpen: false,
  airlinePolicy: false,
  specialInstruction: false,
  bannedItemList: [],
  resData: {},
  resDataList: [],
  fileNameList: [],
  detectType: 'object',
  hasWebCam: false,
  canvasImage: null,
  canvasImageList: [],
  canvas: null,
  clientRoute: false,
  spinner: false,
}

function reducer(state = defaultState, action) {

  const copy = {...state}
  copy[action.type] = action.content
  //console.clear();
  

  return copy
  
}

let store = createStore(reducer)

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress/>
      <Component {...pageProps} />
    </Provider>
  );
}
