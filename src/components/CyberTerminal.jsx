import React, { useState, useEffect, useRef } from 'react';

// Initial boot sequence log logs
const bootLogs = [
  { text: 'SYSTEM INTERACTIVE TERMINAL v1.2.0', type: 'info' },
  { text: '====================================', type: 'info' },
  { text: '[SYSTEM] Initializing portfolio diagnostics...', type: 'sys' },
  { text: '[OK] Loaded credentials: MEKALA NAGENDRA BABU', type: 'ok' },
  { text: '[OK] Backend nodes: Java SE | Spring Boot API | MySQL DB', type: 'ok' },
  { text: '[OK] Client nodes: React SPA v19 | Glassmorphic UI Engine', type: 'ok' },
  { text: '[READY] Diagnostics completed. Status: FREELANCE & HIRE READY.', type: 'sys' },
  { text: 'Type a command or click a quick trigger below.', type: 'info' },
];

const quickTriggers = ['help', 'about', 'skills', 'freelance', 'experience', 'projects', 'contact', 'clear'];

const CyberTerminal = () => {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  // Load bootLogs sequentially with slight delays for hacker effect
  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        const item = bootLogs[currentLogIndex];
        if (item) {
          setHistory((prev) => [...prev, item]);
        }
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const userLine = { text: `visitor@nagendra.dev:~$ ${rawCmd}`, type: 'user' };
    let responseLines = [];

    switch (cmd) {
      case 'help':
        responseLines = [
          { text: 'Available Diagnostic Triggers:', type: 'sys' },
          { text: ' - about      : Displays summary bio & specialization.', type: 'info' },
          { text: ' - skills     : Queries technical capabilities breakdown.', type: 'info' },
          { text: ' - freelance  : Queries custom freelance development availability.', type: 'info' },
          { text: ' - experience : Shows software engineering & internship timeline.', type: 'info' },
          { text: ' - projects   : Reports active repository applications.', type: 'info' },
          { text: ' - contact    : Queries connection coordinates.', type: 'info' },
          { text: ' - clear      : Flushes history buffer.', type: 'info' }
        ];
        break;
      case 'about':
        responseLines = [
          { text: 'Full Name: Nagendra Babu Mekala', type: 'info' },
          { text: 'Degree   : B.Tech in Electronics & Communication Eng (ECE)', type: 'info' },
          { text: 'Focus    : Full Stack Software Engineering & Freelance Development', type: 'info' },
          { text: 'Bio      : Committed to building scalable backend APIs and high-performing client UIs.', type: 'info' }
        ];
        break;
      case 'skills':
        responseLines = [
          { text: 'Backend Core : Java, Spring Boot, Hibernate ORM, JDBC, Servlets', type: 'ok' },
          { text: 'Frontend UI  : React.js, Next.js, JavaScript (ES6+), HTML5/CSS3', type: 'ok' },
          { text: 'Database     : MySQL, relational schema design, SQL query tuning', type: 'ok' },
          { text: 'Services     : RESTful APIs, JSON parsing, security authentication', type: 'ok' }
        ];
        break;
      case 'freelance':
        responseLines = [
          { text: 'Freelance & Contract Availability Status:', type: 'sys' },
          { text: ' -> Status      : OPEN FOR FREELANCE PROJECTS 🚀', type: 'ok' },
          { text: ' -> Services    : Custom Web Applications, E-Commerce, Corporate Sites', type: 'info' },
          { text: ' -> Tech Stack  : React, Java Spring Boot, MySQL, CSS Glassmorphism', type: 'info' },
          { text: ' -> Direct Mail : nagendrababuyadav2003@gmail.com', type: 'info' }
        ];
        break;
      case 'experience':
        responseLines = [
          { text: 'Professional Timeline:', type: 'sys' },
          { text: '1. Software Engineer @ RideAlott Software Solutions (Sep 2025 – Present)', type: 'ok' },
          { text: '2. Full Stack Developer Intern @ JSpiders Academy (Jul 2024 – Jan 2025)', type: 'ok' },
          { text: '3. Full Stack Developer Intern @ Karthikeya Software Solutions (Jan 2024 – Jun 2024)', type: 'ok' }
        ];
        break;
      case 'projects':
        responseLines = [
          { text: 'Active Project Repositories:', type: 'sys' },
          { text: '1. Employee Management System (React, Spring Boot, MySQL)', type: 'ok' },
          { text: '2. RideAlott Corporate Site (Live App - RideAlott.app)', type: 'ok' },
          { text: '3. ShopAlott Grocery Platform (Live Full-Stack E-Commerce)', type: 'ok' },
          { text: '4. EduAlott Learning Hub (Live Digital EdTech Platform)', type: 'ok' }
        ];
        break;
      case 'contact':
        responseLines = [
          { text: 'Established Coordinates:', type: 'sys' },
          { text: ' -> Email  : nagendrababuyadav2003@gmail.com', type: 'info' },
          { text: ' -> Mobile : +91 9908238544', type: 'info' },
          { text: ' -> Place  : Andhra Pradesh, India', type: 'info' }
        ];
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        responseLines = [
          { text: `error: Command "${cmd}" not recognized.`, type: 'err' },
          { text: 'Type "help" or click a quick trigger below.', type: 'info' }
        ];
    }

    setHistory((prev) => [...prev, userLine, ...responseLines]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="terminal-widget glass-panel">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">bash - diagnostics@nagendra.dev</div>
        <div className="terminal-meta">UTF-8 | STABLE</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-logs">
          {history.filter(Boolean).map((log, index) => (
            <div key={index} className={`terminal-line ${log?.type || 'info'}`}>
              {log?.text || ''}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Trigger Pills */}
        <div className="terminal-quick-triggers">
          <span className="quick-label">Triggers:</span>
          {quickTriggers.map((trig) => (
            <button
              key={trig}
              type="button"
              className="quick-trig-btn"
              onClick={() => executeCommand(trig)}
            >
              [{trig}]
            </button>
          ))}
        </div>

        <form className="terminal-input-row" onSubmit={handleFormSubmit}>
          <span className="terminal-prompt">visitor@nagendra.dev:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default CyberTerminal;
