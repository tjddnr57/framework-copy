import React, { useState } from 'react';
import './SideBar.css'; // CSS 파일
import symbol from '../assets/symbol.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

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
                                <Link to="/ProductGroup"><li>제품군</li></Link>
                                <Link to="/ItemMaster"><li>품목</li></Link>
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
             <Link to="/Factory"><li>공장</li></Link>
              <Link to="/Line"><li>라인</li></Link>
              <Link to="/Process"><li>공정</li></Link>
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
             <Link to="/Equipment"><li>설비</li></Link>
             <Link to="/Mold"><li>금형</li></Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;