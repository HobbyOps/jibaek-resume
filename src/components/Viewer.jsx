import { useEffect, useState } from 'react';

import Markdown from 'react-markdown'
import mdContent from '../markdown/baekjaein_resume.md';

import '../css/markdown.css'

function Viewer() {

  const [fileContent, setFileContent] = useState('');

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

    return (
    <div className="viewer">
        develop test
        <div className="notion-style-markdown-bold-font">
            <Markdown>{fileContent}</Markdown>
        </div>
    </div>
  )
}

export default Viewer;
