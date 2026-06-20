import React, { useState, useEffect, useRef } from 'react';

// Initial boot sequence log logs
const bootLogs = [
  { text: 'SYSTEM INTERACTIVE TERMINAL v1.0.4', type: 'info' },
  { text: '====================================', type: 'info' },
  { text: '[SYSTEM] Initializing portfolio diagnostics...', type: 'sys' },
  { text: '[OK] Loaded credentials: MEKALA NAGENDRA BABU', type: 'ok' },
  { text: '[OK] Backend nodes: Spring Boot API | MySQL Database', type: 'ok' },
  { text: '[OK] Client nodes: React SPA v19 | CSS3 Glassmorphic UI', type: 'ok' },
  { text: '[READY] Diagnostics completed. Status: STABLE.', type: 'sys' },
  { text: 'Type "help" to display available diagnostic triggers.', type: 'info' },
];

const CyberTerminal = () => {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  // Load bootLogs sequentially with slight delays for hacker effect
  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setHistory((prev) => [...prev, bootLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 280);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    // Push the command user typed to history
    const userLine = { text: `visitor@nagendra.dev:~$ ${inputVal}`, type: 'user' };
    let responseLines = [];

    switch (cmd) {
      case 'help':
        responseLines = [
          { text: 'Available Command Triggers:', type: 'sys' },
          { text: ' - about    : Displays summary bio information.', type: 'info' },
          { text: ' - skills   : Queries tech stack capabilities.', type: 'info' },
          { text: ' - projects : Reports active web applications.', type: 'info' },
          { text: ' - contact  : Queries network coordinates (email/mobile).', type: 'info' },
          { text: ' - clear    : Flushes history buffer.', type: 'info' }
        ];
        break;
      case 'about':
        responseLines = [
          { text: 'Full Name: Nagendra Babu Mekala', type: 'info' },
          { text: 'Degree: B.Tech in Electronics & Communication Eng (ECE)', type: 'info' },
          { text: 'Focus: Full Stack Web Engineering. Specializing in secure Java REST APIs (Spring Boot) and highly interactive frontend systems (React). Dedicated to turning creative design mockups into production solutions.', type: 'info' }
        ];
        break;
      case 'skills':
        responseLines = [
          { text: 'Backend Layer: Java, JDBC, Servlets, Spring Core, Spring Boot, Hibernate ORM', type: 'ok' },
          { text: 'Frontend Layer: React.js, JavaScript (ES6+), HTML5, CSS3 Glassmorphism', type: 'ok' },
          { text: 'Data Layer   : MySQL, relational database schemas, structured query logic', type: 'ok' },
          { text: 'REST Services: REST APIs, JSON serialization, security handlers', type: 'ok' }
        ];
        break;
      case 'projects':
        responseLines = [
          { text: 'Active Repository Allocations:', type: 'sys' },
          { text: '1. EMP-Management: Full CRUD admin dashboard (React, Spring Boot, MySQL)', type: 'ok' },
          { text: '2. RideAlott Website: Live company solution showcasing corporate routes (HTML/React)', type: 'ok' },
          { text: '3. ShopAlott Application: Full e-commerce grocery storefront integration (Hibernate, Spring, React)', type: 'ok' }
        ];
        break;
      case 'contact':
        responseLines = [
          { text: 'Connection coordinates established:', type: 'sys' },
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
          { text: `error: Unknown diagnostics command "${cmd}".`, type: 'err' },
          { text: 'Type "help" to display valid system options.', type: 'info' }
        ];
    }

    setHistory((prev) => [...prev, userLine, ...responseLines]);
    setInputVal('');
  };

  return (
    <div className="terminal-widget">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">bash - diagnostics@nagendra.dev</div>
        <div className="terminal-meta">UTF-8</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-logs">
          {history.map((log, index) => (
            <div key={index} className={`terminal-line ${log.type}`}>
              {log.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
        <form className="terminal-input-row" onSubmit={handleCommandSubmit}>
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
