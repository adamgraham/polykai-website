import React, { useState } from 'react';
// import GitHubButton from 'react-github-btn'
import Lightbox from 'react-image-lightbox';

import './App.css';
import './colors.css';
import 'react-image-lightbox/style.css';

import icon from './icon.png';
import screenshot from './screenshot.png';

const LINKS = {
  repo: 'https://github.com/adamgraham/polykai',
  repoFork: 'https://github.com/adamgraham/polykai/fork',
  license: 'https://github.com/adamgraham/polykai/blob/master/LICENSE',
  portfolio: 'https://www.adamgraham.io/',
  monokai: 'https://github.com/monokai',
};

const App = () => {
  const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="title">
          <span className="large color-class">polykai</span>
          <span className="medium color-keyword">
            <wbr />.
          </span>
          <span className="medium color-constant">theme</span>
        </div>
        <div className="description">
          <span className="line-one">
            A dark
            <span className="color-string"> color scheme </span>
            for code editors inspired by{' '}
            <a
              href={LINKS.monokai}
              target="_blank"
              rel="noopener noreferrer"
              className="color-number"
            >
              Monokai
            </a>
          </span>
          <span className="line-two">
            View install instructions on{' '}
            <a href={LINKS.repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </span>
        </div>
        {/* <div className="github-buttons">
            <GitHubButton
              href={LINKS.repo}
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star adamgraham/polykai on GitHub"
            >
              Star
            </GitHubButton>
            <span style={{ padding: '0 10px' }} />
            <GitHubButton
              href={LINKS.repoFork}
              data-icon="octicon-repo-forked"
              data-size="large"
              data-show-count="true"
              aria-label="Fork adamgraham/polykai on GitHub"
            >
              Fork
            </GitHubButton>
          </div> */}
      </header>
      <main>
        <section className="color-palette">
          <span className="color-blob background" title="Background" />
          <span className="color-blob selection" title="Selection" />
          <span className="color-blob comment" title="Comment" />
          <span className="color-blob foreground" title="Foreground" />
          <span className="color-blob string" title="String" />
          <span className="color-blob property" title="Property" />
          <span className="color-blob type" title="Type" />
          <span className="color-blob keyword" title="Keyword" />
          <span className="color-blob number" title="Number" />
          <span className="color-blob constant" title="Constant" />
          <span className="color-blob function" title="Function" />
          <span className="color-blob class" title="Class" />
        </section>
        <section className="screenshot">
          <button onClick={() => setIsScreenshotOpen(true)}>
            <img alt="Screenshot" src={screenshot} />
          </button>
          {isScreenshotOpen && (
            <Lightbox
              mainSrc={screenshot}
              enableZoom={false}
              onCloseRequest={() => setIsScreenshotOpen(false)}
            />
          )}
        </section>
      </main>
      <footer>
        <span className="credits">
          Made with
          <span role="img" aria-label="love">
            {' '}
            ❤️{' '}
          </span>
          by{' '}
          <a href={LINKS.portfolio} target="_blank" rel="noopener noreferrer">
            Adam Graham
          </a>
        </span>
        <span className="license">
          under{' '}
          <a
            href={LINKS.license}
            target="_blank"
            rel="noopener noreferrer"
            className="color-comment"
          >
            MIT license
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
