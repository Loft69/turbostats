import 'react';

import './css/reset.css';
import './css/fonts.css';
import './css/global.css';
import './css/index.css';
import RatingSection from "./components/RatingSection.jsx";
import LanguageSelector from "./components/LanguageSelector.jsx";
import PopularPosts from "./components/PopularPosts.jsx";
import {useState} from "react";

function App() {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim()) {
            alert(`Поиск: ${searchQuery}`);
        }
    };

    return (
        <>
            <header className="header header1">
                <div className="header-up header-up1">
                    <div className="header-up-row1">
                        <div className="header-up-row-left">
                            <div className="logo logo1">
                                <img src="assets/logo/logo-clip-path1.png" className="logo-clip-path" alt="logo" />
                            </div>
                            <div className="header-up-row2">
                                <input
                                    type="text"
                                    className="header-up-input desktop-body"
                                    placeholder="Поиск"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                                <button className="header-up-search-btn" onClick={handleSearch}>
                                    <object data="assets/header-up/header-up-search-sm.svg" className="header-up-search-sm" type="image/svg+xml" />
                                </button>
                            </div>
                        </div>
                        <div className="header-up-row-right">
                            <div className="theme-button theme-btn">
                                <object data="assets/theme-button/theme-button-icons.svg" className="theme-button-theme-icons theme-button-icons" type="image/svg+xml" />
                            </div>
                            <LanguageSelector />
                            <button className="header-up-btn desktop-label btn1 hover-bright">Войти</button>
                        </div>
                    </div>
                </div>
                <div className="header-down">
                    <div className="header-down-row">
                        <p className="header-down-text-link1 desktop-body">Каталог</p>
                        <p className="header-down-text-link2 desktop-body">Боты</p>
                        <p className="header-down-text-link3 desktop-body">Рейтинг</p>
                        <p className="header-down-text-link4 desktop-body">Поиск по каналам</p>
                        <p className="header-down-text-link5 desktop-body">Добавить канал</p>
                    </div>
                </div>
            </header>

            <div className="col5">
                <img src="assets/chart.png" className="chart" alt="chart" />
                <h1 className="title-symbol desktop-display">Сервис аналитики MAX каналов</h1>

                <div className="row7">
                    <div className="category-column-a category-col1">
                        <div className="category">
                            <p className="category-text">Бизнес и стартапы </p>
                            <p className="category-text-13-9k">45.3k</p>
                        </div>
                        <div className="category category2">
                            <p className="category-text">Блоги</p>
                            <p className="category-text-13-9k">62.1k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Видео и фильмы </p>
                            <p className="category-text-13-9k">78.4k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Дизайн </p>
                            <p className="category-text-13-9k">22.7k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Еда и кулинария</p>
                            <p className="category-text-13-9k">34.9k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Здоровье и фитнес</p>
                            <p className="category-text-13-9k">41.1k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Игры</p>
                            <p className="category-text-13-9k">89.6k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Инстаграм*</p>
                            <p className="category-text-13-9k">55.8k</p>
                        </div>
                        <div className="category category9">
                            <p className="category-text">Интерьер и строительство</p>
                            <p className="category-text-13-9k">18.4k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Искусство</p>
                            <p className="category-text-13-9k">12.3k</p>
                        </div>
                    </div>

                    <div className="category-column-b category-col2">
                        <div className="category">
                            <p className="category-text">Карьера</p>
                            <p className="category-text-13-9k">28.6k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Картинки и фото</p>
                            <p className="category-text-13-9k">37.1k</p>
                        </div>
                        <div className="category category13">
                            <p className="category-text">Книги</p>
                            <p className="category-text-13-9k">15.4k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Криптовалюты</p>
                            <p className="category-text-13-9k">67.9k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Курсы и гайды</p>
                            <p className="category-text-13-9k">31.2k</p>
                        </div>
                        <div className="category category16">
                            <p className="category-text">Лингвистика</p>
                            <p className="category-text-13-9k">6.8k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Маркетинг, PR, реклама</p>
                            <p className="category-text-13-9k">52.4k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Медицина</p>
                            <p className="category-text-13-9k">24.6k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Мода и красота</p>
                            <p className="category-text-13-9k">47.3k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Музыка</p>
                            <p className="category-text-13-9k">58.3k</p>
                        </div>
                    </div>

                    <div className="category-column-b category-col3">
                        <div className="category category11">
                            <p className="category-text">Новости и СМИ</p>
                            <p className="category-text-13-9k">92.5k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Образование</p>
                            <p className="category-text-13-9k">36.8k</p>
                        </div>
                        <div className="category category13">
                            <p className="category-text">Политика</p>
                            <p className="category-text-13-9k">41.2k</p>
                        </div>
                        <div className="category category14">
                            <p className="category-text">Познавательное</p>
                            <p className="category-text-13-9k">29.4k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Право</p>
                            <p className="category-text-13-9k">11.2k</p>
                        </div>
                        <div className="category category16">
                            <p className="category-text">Природа</p>
                            <p className="category-text-13-9k">9.7k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Продажи</p>
                            <p className="category-text-13-9k">33.5k</p>
                        </div>
                        <div className="category category18">
                            <p className="category-text">Психология</p>
                            <p className="category-text-13-9k">26.3k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Путешествия</p>
                            <p className="category-text-13-9k">39.8k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Рукоделие</p>
                            <p className="category-text-13-9k">7.2k</p>
                        </div>
                    </div>

                    <div className="category-column-b category-col4">
                        <div className="category category11">
                            <p className="category-text">Религия</p>
                            <p className="category-text-13-9k">8.9k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Семья и дети</p>
                            <p className="category-text-13-9k">16.7k</p>
                        </div>
                        <div className="category category13">
                            <p className="category-text">Софт и приложения</p>
                            <p className="category-text-13-9k">44.5k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Спорт</p>
                            <p className="category-text-13-9k">53.6k</p>
                        </div>
                        <div className="category category15">
                            <p className="category-text">Технологии</p>
                            <p className="category-text-13-9k">72.3k</p>
                        </div>
                        <div className="category category16">
                            <p className="category-text">Telegram</p>
                            <p className="category-text-13-9k">63.9k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Транспорт</p>
                            <p className="category-text-13-9k">14.8k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Цитаты</p>
                            <p className="category-text-13-9k">5.3k</p>
                        </div>
                        <div className="category category19">
                            <p className="category-text">Экономика</p>
                            <p className="category-text-13-9k">20.1k</p>
                        </div>
                        <div className="category">
                            <p className="category-text">Юмор и развлечения</p>
                            <p className="category-text-13-9k">49.7k</p>
                        </div>
                    </div>
                </div>

                <div className="heading heading1">Рейтинги</div>

                <RatingSection />

                <PopularPosts />

                <div className="heading heading3">Статистика сервиса</div>

                <div className="row-bottom">
                    <div className="card-main card-main1">
                        <div className="card-main-col-left">
                            <div className="card-main-col-top">
                                <p className="card-main-text">Посещаемость сайта</p>
                                <h2 className="card-main-subtitle desktop-heading2">126 542</h2>
                            </div>
                            <div className="card-main-col-bottom">
                                <div className="row-b row4">
                                    <p className="text-b">сегодня</p>
                                    <p className="row-text-stat">3 456</p>
                                </div>
                                <div className="row-b row5">
                                    <p className="text-b">за неделю</p>
                                    <p className="row-text-stat">24 321</p>
                                </div>
                                <div className="row-b row6">
                                    <p className="text-b">за месяц</p>
                                    <p className="row-text-stat">98 765</p>
                                </div>
                            </div>
                        </div>
                        <button className="card-main-btn-symbol desktop-caption btn2 hover-zoom">график</button>
                    </div>

                    <div className="card-main card-main2">
                        <div className="card-main-col-left">
                            <div className="card-main-col-top">
                                <p className="card-main-text">Новые зарегестрированные каналы</p>
                                <h2 className="card-main-subtitle desktop-heading2">444</h2>
                            </div>
                            <div className="card-main-col-bottom">
                                <div className="row-b row4">
                                    <p className="text-b">сегодня</p>
                                    <p className="row-text-stat">+12</p>
                                </div>
                                <div className="row-b row5">
                                    <p className="text-b">за неделю</p>
                                    <p className="row-text-stat">+87</p>
                                </div>
                                <div className="row-b row6">
                                    <p className="text-b">за месяц</p>
                                    <p className="row-text-stat">+345</p>
                                </div>
                            </div>
                        </div>
                        <button className="card-main-btn-symbol desktop-caption btn2 hover-zoom">график</button>
                    </div>
                </div>
            </div>

            <footer className="footer footer1">
                <div className="footer-col1">
                    <div className="footer-col2">
                        <div className="footer-row-top">
                            <div className="column col1">
                                <p className="text-footer-copyright column-text-footer">Сервис</p>
                                <div className="column-col">
                                    <p className="column-text-link1">Каталог</p>
                                    <p className="column-text-link2">Поиск по каналам</p>
                                    <p className="column-text-link3">Добавить канал</p>
                                </div>
                            </div>
                            <div className="footer-col3">
                                <p className="text-footer-copyright footer-text-copyright1">Контакты</p>
                                <div className="footer-col4">
                                    <p className="footer-text-link1 desktop-caption">Контакты</p>
                                    <p className="footer-text-link2 desktop-caption">Поддержка</p>
                                </div>
                            </div>
                            <div className="column col2">
                                <p className="text-footer-copyright column-text-footer">Правовая информация</p>
                                <div className="column-col">
                                    <p className="column-text-link1">Условия использования</p>
                                    <p className="column-text-link2">Конфиденциальность</p>
                                    <p className="column-text-link3">Обработка данных</p>
                                </div>
                            </div>
                            <div className="column col3">
                                <p className="text-footer-copyright column-text-footer">Наши боты</p>
                                <div className="column-col">
                                    <p className="column-text-link1">Название 1</p>
                                    <p className="column-text-link2">Название 2</p>
                                    <p className="column-text-link3">Название 3</p>
                                </div>
                            </div>
                            <div className="column col4">
                                <p className="text-footer-copyright column-text-footer">Наши каналы</p>
                                <div className="column-col">
                                    <p className="column-text-link1">Название 1</p>
                                    <p className="column-text-link2">Название длинное</p>
                                    <p className="column-text-link3">Название 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="logo logo2">
                            <img src="assets/logo/logo-clip-path2.png" className="logo-clip-path" alt="logo" />
                        </div>
                    </div>
                    <div className="footer-row-bottom">
                        <p className="text-a footer-text-copyright2">©2026 TurboStats. Все права защищены.</p>
                        <p className="text-a footer-text-copyright3">Created by Architect Lab</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;