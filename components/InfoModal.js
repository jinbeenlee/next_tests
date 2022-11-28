import React from 'react';
//import '../styles/Modal.css';
import Image from 'next/image'
import  {  useRef } from 'react';




const InfoModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const photoInput = useRef();
  

  
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal infomodal' : 'infomodal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}
            <h3>한가지 품목을 무늬가 없는 <br />깨끗한 배경에서 촬영해주세요!</h3>
            <ul>
              <li><Image width="100" height="100"src="/img/Infomodal_1.png"/></li>
              <li><Image width="100" height="100" src="/img/Infomodal_2.png" /></li>
              <li><Image width="100" height="100" src="/img/Infomodal_3.png" /></li>
            </ul>
            <h4>한가지의 물품으로 촬영해주세요!</h4>
            <h4>병 및 튜브는 정면에서 촬영해주세요!</h4>
            <h4>가이드라인에 맞춰 촬영시 더 정확한 결과가 나와요!</h4>
          </main>
          <footer>
            {/*<button className="close" onClick={close}>
              close
            </button>*/}
            
            <button onClick={props.camera}>
              네 확인했습니다.
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default InfoModal;