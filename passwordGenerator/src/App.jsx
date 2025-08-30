
import { useCallback, useState , useEffect , useRef } from 'react';
import './App.css';


function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");


const passwordRef = useRef(null);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 20);
  window.navigator.clipboard.writeText(password);
} , [password])

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) chars += "0123456789";
    if (charAllow) chars += "!@#$%^&*()";
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  }, [length, numAllow, charAllow]);

  
  useEffect(() => {
    generatePassword()
  }, [length, numAllow, charAllow , setPassword])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">Password Generator</h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
            ref={passwordRef}
          />
          <button
            
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={e => setLength(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <span className="text-white font-medium">Length: {length}</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numAllow}
              id="numberInput"
              onChange={() => setNumAllow(prev => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="numberInput" className="text-white">Include Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllow}
              id="charInput"
              onChange={() => setCharAllow(prev => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="charInput" className="text-white">Include Symbols</label>
          </div>
          <button
            className="w-full mt-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App






