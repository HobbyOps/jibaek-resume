import { useEffect, useState } from 'react';

import Markdown from 'react-markdown'
import mdContent from '../markdown/baekjaein_resume.md';

import '../css/markdown.css'

function Viewer() {

  const [fileContent, setFileContent] = useState('');

  // 초기 테마 상태를 localStorage에서 가져오거나, 기본값으로 'light' 설정
  const [isDarkMode, setIsDarkMode] = useState(
      localStorage.getItem('theme') === 'dark'
    );

  useEffect(() => {
    fetch(mdContent)
      .then(response => response.text())
      .then(text => {
        setFileContent(text);
      })
      .catch(error => {
        console.error('파일을 읽는 도중 오류가 발생했습니다:', error);
      });
  }, []);

  // isDarkMode 상태가 변경될 때 body 태그에 dark-mode 클래스 추가/제거
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode]);

    const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

    return (
    <div className="notion-markdown-container">
      <button onClick={handleToggle} className="theme-toggle-button">
        {isDarkMode ? '☀️' : '🌙'} {/* 아이콘으로 현재 모드 표시 */}
      </button>
      <Markdown>{fileContent}</Markdown>
    </div>
  )
}

export default Viewer;
