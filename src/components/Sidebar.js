import React, { useState } from 'react';
import './SideBar.css'; // CSS 파일
import symbol from '../assets/symbol.svg';
import logo from '../assets/logo.svg';

function SideBar() {
  const [activeCategory, setActiveCategory] = useState(null); // 선택된 카테고리 관리

    const toggleCategory = (category) => {
        setActiveCategory((prevCategory) =>
            prevCategory === category ? null : category
        );
    };

    return (
        <div className="sidebar">
            <div className="menu">
                <div className='logo'>
                    <img src={symbol} alt="symbol" />
                    <img src={logo} alt='logo' />
                </div>
                <ul className="level1">
                    <p>생산정보관리</p>

                    <li>
                        <div
                            className="lvl1-name"
                            onClick={() => toggleCategory('a')}
                        >
                            <p>품목정보관리</p>
                        </div>
                        <div
                            className={`level2-wrapper ${activeCategory === 'a' ? 'open' : ''}`}
                        >
                            <ul className="level2">
                                <li>제품군</li>
                                <li>품목</li>
                          </ul>
                      </div>
                  </li>

                  {/* Category B */}
                  <li>
                      <div
                          className="lvl1-name"
              onClick={() => toggleCategory('b')}
            >
              <p>공정정보관리</p>
            </div>
            <div
              className={`level2-wrapper ${activeCategory === 'b' ? 'open' : ''}`}
            >
              <ul className="level2">
                <li>공장</li>
                <li>라인</li>
                <li>공정</li>
              </ul>
            </div>
          </li>

          {/* Category C */}
          <li>
            <div
              className="lvl1-name"
              onClick={() => toggleCategory('c')}
            >
              <p>설비정보관리</p>
            </div>
            <div
              className={`level2-wrapper ${activeCategory === 'c' ? 'open' : ''}`}
            >
              <ul className="level2">
                <li>설비</li>
                <li>금형형</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;