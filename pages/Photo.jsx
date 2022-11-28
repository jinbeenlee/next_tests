import React, { useState, useRef, useEffect } from 'react';
//import API from '../api-server';
import { Circles } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import InfoModal from '../components/InfoModal';
import PageHeader from '../components/PageHeader';
import Image from 'next/image';
//import  Error from './_error';

export default function Photo() {
  const [imgBase64, setImgBase64] = useState();
  const [timer, setTimer] = useState(undefined);
  const [resultImg, setResultImg] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [isDropdownChanged, setIsDropdownChanged] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [toggleValue, setToggleValue] = useState('camera');
  const [showModal, setShowModal] = useState(false);
  const webRef = useRef(null);
  const canvasRef = useRef(null);
  const photoInput = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const store = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  //const statusCode = res.status > 200 ? res.status : false;
  const videoContrains = {
    facingMode: 'environment',
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const videoConstraints = {
    facingMode: { exact: 'environment' },
  };

  useEffect(() => {
    
    if (!store.hasWebCam) {
      
      setToggleValue('pc');
    }
    //console.log(`store.clientRoute: ${store.clientRoute}`);
    if (store.clientRoute) {
      setLoaded(true);
    }
  }, []);

  const handleClickInputBtn = () => {
    photoInput.current.click();
  };

  //if (statusCode) {
  //  return <Error/>
  //}

  return (
    <div className="user PhotoWrap">
      <div className="PhotoWrap2">
        <PageHeader name="기내반입금지물품 셀프체크" />
        <div className="introduction">
          <h2>
            기내반입금지물품&nbsp;<b className="purple">셀프체크&nbsp;</b>
            <a>
              <span
                className="material-symbols-outlined"
                onClick={() => router.push('/MustRead')}
                style={{ fontSize: '28px' }}
              >
                contact_support
              </span>
            </a>
          </h2>
          <p className="txtBox">
            비행기에 이거 가져가도 돼? <br />
            기내반입이 가능한 물품인지
            <br />
            간편하게 <b>사진으로 검색</b>해보세요!
          </p>
          {/*<button className="btn1" onClick={() => router.push('/MustRead')}>
            시범운영 안내사항
          </button>*/}
        </div>
        <div className="HowToUse">
          <h2>
            이용방법
            {/*<br />
            어떻게 되나요?*/}
          </h2>
          <ul className="step">
            <li>
              <div className="stepImg">
                <Image width="75" height="75" src="/img/step.1.png" />
              </div>
              <span>STEP.01</span>
              {/*<p>반입 규정이 궁금한 물품을 직접 촬영합니다.</p>*/}
              <p>확인하고 싶은 물품을 촬영해주세요.</p>
            </li>
            <li>
              <div className="stepImg">
                <Image width="75" height="75" src="/img/step.2.png" />
              </div>
              <span>STEP.02</span>
              <p>판별결과가 나오면 물품의 소분류를 선택하세요.</p>
            </li>
            <li className="thirdChild">
              <div className="stepImg">
                <Image width="80" height="80" src="/img/step.3.png" />
              </div>
              <span>STEP.03</span>
              <p>반입 가능한 물품인지 확인하고 짐 싸면 끝!</p>
            </li>
          </ul>
          <button className="btn2" onClick={() => router.push('/CameraModal')}>
            시작하기
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          capture={toggleValue === 'camera' && 'environment'}
          multiple={
            (toggleValue === 'gallery' || toggleValue === 'pc') && 'multiple'
          }
          style={{ display: 'none' }}
          ref={photoInput}
          onChange={(e) => preprocessImage(e.target)}
        />
        {store.spinner ? (
          <div className="spinnerWrap">
            <div className="spinnerModal">
              <Circles color="#00BFFF" height={100} width={100} /> <br />
            </div>
          </div>
        ) : null}

        {/*<InfoModal
          open={modalOpen}
          camera={handleClickInputBtn}
          close={closeModal}
          header="예시"
        ></InfoModal>*/}
      </div>
    </div>
  );
}
