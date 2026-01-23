import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, X } from 'lucide-react'
import { getUniqueCountryCodes } from '../data/countryCodes'

const CountryCodeSelector = ({ value, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)
  const searchInputRef = useRef(null)

  const countryCodes = getUniqueCountryCodes()
  
  const selectedCountry = countryCodes.find(c => c.code === value) || countryCodes.find(c => c.code === '+86')

  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus search input when dropdown opens
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }
      }, 100)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (country) => {
    onChange(country.code)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Selected Country Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900 flex items-center justify-between hover:border-primary-300 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{selectedCountry.flag}</span>
          <span className="font-medium">{selectedCountry.code}</span>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ maxHeight: '400px' }}
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-primary-100/50">
              <div className="relative">
                <Search 
                  size={18} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white text-gray-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Country List */}
            <div className="overflow-y-auto" style={{ maxHeight: '340px' }}>
              {filteredCountries.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No countries found</p>
                </div>
              ) : (
                <div className="py-2">
                  {filteredCountries.map((country, index) => (
                    <motion.button
                      key={`${country.code}-${country.country}-${index}`}
                      type="button"
                      onClick={() => handleSelect(country)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.01 }}
                      className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-primary-50 transition-colors text-left ${
                        value === country.code ? 'bg-primary-100 border-l-4 border-primary-600' : ''
                      }`}
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{country.country}</div>
                        <div className="text-sm text-gray-500">{country.code}</div>
                      </div>
                      {value === country.code && (
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
              {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} found
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CountryCodeSelector
