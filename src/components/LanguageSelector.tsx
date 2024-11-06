import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w320/gb.png" },
  { code: "it", name: "Italiano", flag: "https://flagcdn.com/w320/it.png" }
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.slice(0, 2);
    const initialLanguage = languages.find(lang => lang.code === savedLanguage) ||
                            languages.find(lang => lang.code === browserLanguage) ||
                            languages[0];

    setSelectedLanguage(initialLanguage);
    i18n.changeLanguage(initialLanguage.code);
  }, [i18n]);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    localStorage.setItem('language', language.code);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        aria-label="Select Language"
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} flag`}
          className="w-16 h-16 rounded-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{t("selectLanguage")}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close language selector"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  selectedLanguage.code === language.code
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
                aria-label={`Select ${language.name}`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={language.flag}
                    alt={`${language.name} flag`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23f0f0f0'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="font-medium">{language.name}</span>
                {selectedLanguage.code === language.code && (
                  <span className="ml-auto text-blue-600 text-sm">Selected</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;