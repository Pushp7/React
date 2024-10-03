import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)
      str = str + "0123456789"
    if (charAllowed)
      str = str + "!@#$%^&.?*-+_={}[]~`"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    //copy password to clipboard
    window.navigator.clipboard.writeText(password)

    // Select the text field
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="main w-full h-screen bg-zinc-800 pt-8">
        <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-600'>
          <h1 className="text-center text-white mb-2">Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input
                type="text"
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
              />
              <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>

          <div className='flex justify-evenly text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input
                    type="range"
                    id='len'
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => { setLength(e.target.value) }}
                  />
                  <label htmlFor="len">Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input
                    type="checkbox"
                    id='numberInput'
                    checked={numberAllowed}
                    onChange={() => {
                      setNumberAllowed(!numberAllowed)
                    }}
                  />
                  <label htmlFor='numberInput'>Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input
                    type="checkbox"
                    id='charInput'
                    checked={charAllowed}
                    onChange={() => {
                      setCharAllowed(!charAllowed)
                    }}
                  />
                  <label htmlFor='charInput'>Special Characters</label>
              </div>
          </div>
        </div>







      </div>
    </>
  )
}

export default App
