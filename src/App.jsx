import React, { useState, useEffect } from 'react'
import { FaDice, FaRandom, FaRegTimesCircle } from 'react-icons/fa'

const App = () => {
  const [currentQuote, setCurrentQuote] = useState("")
  const [currentQuoteid, setCurrentQuoteid] = useState("")
  const [currentQuoteauthor, setCurrentQuoteauthor] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://dummyjson.com/quotes/random?limit=100')
      const data = await response.json()
      console.log(data)
      setCurrentQuote(data.quote)
      setCurrentQuoteid(data.id)
      setCurrentQuoteauthor(data.author)
    } catch (err) {
      setError('Failed to fetch quote')
    } finally {
      setIsLoading(false)
    }
  }

  // This useEffect runs once when the component mounts to fetch initial quote
  useEffect(() => {
    fetchQuote();
  }, []) // Empty dependency array means it only runs once on mount

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 max-w-xl w-full 
      transform transition-all duration-500 relative">
        {error ? (
          <p className="text-red-400 text-center mb-8 text-xl font-light
          animate-shake">{error}</p>
        ) : isLoading ? (
          <div className="flex justify-center mb-8">
            <div className="animate-spin h-8 w-8 border-4 border-gray-400 border-t-transparent rounded-full" />
          </div>
        ) : (
          <>
            <div className="text-emerald-400 text-sm mb-4 text-center">
              ADVICE #{currentQuoteid}
            </div>
            <p className="text-gray-200 mb-8 text-center text-2xl font-light leading-relaxed
            animate-fadeIn motion-safe:animate-slideUp">
              "{currentQuote}"
            </p>
            <p className="text-gray-200 mb-8 text-center text-2xl font-light leading-relaxed
            animate-fadeIn motion-safe:animate-slideUp">
              - {currentQuoteauthor}
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </>
        )}

        <button
          onClick={fetchQuote}
          disabled={isLoading}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2
          bg-emerald-400 hover:bg-emerald-300 p-4 rounded-full
          transition-all duration-300 disabled:opacity-50
          transform hover:shadow-lg hover:shadow-emerald-400/20
          focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 group"
        >
          <FaRandom className={`text-gray-900 text-xl ${isLoading ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
        </button>
      </div>
    </div>
  )
}

export default App