import React from 'react';
    import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

    function App() {
      const repositories = [
        {
          name: 'repo1',
          url: 'https://github.com/AdityaRAJHI/repo1',
          description: 'Description for repo 1',
        },
        {
          name: 'repo2',
          url: 'https://github.com/AdityaRAJHI/repo2',
          description: 'Description for repo 2',
        },
        {
          name: 'repo3',
          url: 'https://github.com/AdityaRAJHI/repo3',
          description: 'Description for repo 3',
        },
      ];

      return (
        <div className="container">
          <div className="header">
            <h1>Aditya Raj</h1>
            <p>Software Developer</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/AdityaRAJHI" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/adityarajhi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/adityarajhi" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="repositories">
            <h2>Repositories</h2>
            <ul className="repo-list">
              {repositories.map((repo, index) => (
                <li key={index} className="repo-item">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
