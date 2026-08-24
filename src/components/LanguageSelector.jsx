import { useState, useRef, useEffect } from 'react';

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('RU');
    const dropdownRef = useRef(null);

    const languages = ['RU', 'EN', 'DE', 'FR', 'ES'];

    const toggleMenu = () => setIsOpen(!isOpen);
    const selectLanguage = (lang) => {
        setCurrentLang(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuStyles = {
        position: 'absolute',
        top: 'calc(100% + 8px)',
        right: 0,
        minWidth: '80px',
        backgroundColor: '#fff',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        padding: '6px 0',
        zIndex: 100,
        listStyle: 'none',
        margin: 0,
    };

    const itemStyles = {
        padding: '8px 20px',
        fontSize: '14px',
        fontFamily: 'Geologica, sans-serif',
        color: '#04044a',
        cursor: 'pointer',
        transition: 'background-color 0.15s',
        textAlign: 'center',
    };
    const itemActiveStyles = { backgroundColor: '#3434ca', color: '#fff' };

    return (
        <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
                className="btn-language btn-language1 hover-bright"
                onClick={toggleMenu}
            >
                <p className="btn-language-label desktop-label">{currentLang}</p>
                <object
                    data="assets/btn-language/btn-language-icon.svg"
                    className="btn-language-icon-down btn-language-icon"
                    type="image/svg+xml"
                />
            </button>

            {isOpen && (
                <ul style={menuStyles}>
                    {languages.map((lang) => (
                        <li
                            key={lang}
                            style={{
                                ...itemStyles,
                                ...(lang === currentLang ? itemActiveStyles : {}),
                            }}
                            onMouseEnter={(e) => {
                                if (lang !== currentLang) {
                                    e.target.style.backgroundColor = '#eff0f6';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (lang !== currentLang) {
                                    e.target.style.backgroundColor = 'transparent';
                                }
                            }}
                            onClick={() => selectLanguage(lang)}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;