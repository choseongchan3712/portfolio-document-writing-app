import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}

  :root {
    /* Primary Colors */
    --primary: #2C5282;  /* 신뢰감 있는 네이비 블루 */
    --secondary: #4A5568; /* 중립적인 그레이 */
    
    /* Background Colors */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F7FAFC;
    --bg-tertiary: #EDF2F7;
    
    /* Text Colors */
    --text-primary: #2D3748;
    --text-secondary: #4A5568;
    --text-tertiary: #718096;
    
    /* Accent Colors */
    --accent-success: #38A169;
    --accent-warning: #D69E2E;
    --accent-danger: #E53E3E;
    
    /* Border Colors */
    --border-light: #E2E8F0;
    --border-medium: #CBD5E0;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    letter-spacing: -0.3px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-secondary);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--secondary);
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-medium);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: all var(--transition-fast);

    &:hover {
      background-color: var(--bg-secondary);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid var(--border-medium);
    border-radius: var(--radius-md);
    background-color: var(--bg-primary);
    transition: border-color var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--primary);
    }

    &::placeholder {
      color: var(--text-tertiary);
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border-medium);
    border-radius: var(--radius-sm);

    &:hover {
      background: var(--text-tertiary);
    }
  }

  /* Table Styles */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--spacing-lg);
  }

  th, td {
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-light);
    text-align: left;
  }

  th {
    background-color: var(--bg-secondary);
    font-weight: 600;
  }

  /* List Styles */
  ul, ol {
    padding-left: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
  }

  li {
    margin-bottom: var(--spacing-xs);
  }

  /* Form Group Spacing */
  .form-group {
    margin-bottom: var(--spacing-md);
  }

  /* Card-like containers */
  .card {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;