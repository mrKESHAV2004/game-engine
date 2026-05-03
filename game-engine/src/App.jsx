import { Sidebar } from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Resources from './Pages/Resources'
import Documents from './Pages/Documents'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    if (!document.getElementById('tw-config-custom')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.id = 'tw-config-custom';
      script.onload = () => {
        window.tailwind.config = {
          theme: {
            extend: {
              colors: {
                e: {
                  bg:        '#0c0e14', bg2:       '#13161f', bg3:       '#1a1e2b',
                  bd:        '#252a38', bd2:       '#2e3447', tx:        '#e2e6f0',
                  mu:        '#7a8299', dim:       '#3d4460',
                  indigo:    '#6c8aff', 'indigo-d':'#3d56cc', 'indigo-b':'#151a2e',
                  teal:      '#2dd4bf', 'teal-d':  '#0d9488', 'teal-b':  '#0d1f1e',
                  amber:     '#f59e0b', 'amber-b': '#1f1809',
                  red:       '#f87171', 'red-b':   '#1f0d0d',
                  purple:    '#a78bfa', 'purple-b':'#180e2a',
                  green:     '#4ade80', 'green-b': '#0c1f10',
                  pink:      '#f472b6',
                }
              },
              fontFamily: {
                sans:  ['"DM Sans"',   'sans-serif'],
                mono:  ['"IBM Plex Mono"', 'monospace'],
                serif: ['Fraunces',    'serif'],
              }
            }
          }
        }
      };
      document.head.appendChild(script);
    }
  }, []);
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/documents" element={<Documents/>}/>
      </Routes>
    </div>
  )
}

export default App