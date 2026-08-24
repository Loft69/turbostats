import { useState } from 'react';

const postsData = [
    {
        id: 1,
        channel: 'TechInsider',
        subscribers: '85.4k',
        text: 'Новый iPhone 17 получит чип A19 и камеру с 8K записью. Батарея вырастет на 20%. Релиз – сентябрь.',
        views: '215 тыс',
        likes: '1.2k',
        reposts: '345',
    },
    {
        id: 2,
        channel: 'FoodieJoy',
        subscribers: '42.1k',
        text: 'Рецепт тыквенного супа с кокосовым молоком и имбирём. Готовится за 30 минут. Попробуйте!',
        views: '98 тыс',
        likes: '874',
        reposts: '210',
    },
    {
        id: 3,
        channel: 'FitnessGuru',
        subscribers: '63.7k',
        text: '5 упражнений для пресса без инвентаря. Эффективность подтверждена исследованиями.',
        views: '132 тыс',
        likes: '1.5k',
        reposts: '430',
    },
    {
        id: 4,
        channel: 'TravelDiary',
        subscribers: '29.3k',
        text: 'Топ-3 места для осеннего отпуска: Португалия, Хорватия, Греция. Билеты уже дешевеют.',
        views: '76 тыс',
        likes: '620',
        reposts: '180',
    },
    {
        id: 5,
        channel: 'MovieManiac',
        subscribers: '51.8k',
        text: 'Вышел трейлер нового фильма Нолана. Сюжет в секрете, обещают неожиданный поворот.',
        views: '204 тыс',
        likes: '2.3k',
        reposts: '780',
    },
    {
        id: 6,
        channel: 'ScienceLab',
        subscribers: '37.2k',
        text: 'Материал, который восстанавливается за 10 минут под светом. Прорыв в нанотехнологиях.',
        views: '89 тыс',
        likes: '960',
        reposts: '290',
    },
    {
        id: 7,
        channel: 'AutoWorld',
        subscribers: '22.5k',
        text: 'Электрический внедорожник Tesla с запасом хода 800 км. Старт продаж – 2026 год.',
        views: '67 тыс',
        likes: '540',
        reposts: '120',
    },
    {
        id: 8,
        channel: 'HistoryDoc',
        subscribers: '18.9k',
        text: 'Археологи нашли древний город в Амазонке. Возраст – более 5000 лет.',
        views: '54 тыс',
        likes: '430',
        reposts: '95',
    },
    {
        id: 9,
        channel: 'ArtGallery',
        subscribers: '14.3k',
        text: 'Выставка импрессионистов в Москве продлена до конца месяца. Билеты в продаже.',
        views: '31 тыс',
        likes: '280',
        reposts: '60',
    },
];

const PopularPosts = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 3;
    const totalPages = Math.ceil(postsData.length / postsPerPage);

    const prevPage = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    const offset = currentPage * (380 + 20);

    return (
        <>
            <div className="heading2">
                <button
                    className="heading-btn heading-left"
                    onClick={prevPage}
                    aria-label="Previous posts"
                >
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5" fill="var(--bg)" />
                        <path d="M25 15L18 22L25 29" stroke="var(--primary-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h2 className="heading-subtitle desktop-heading1">Популярные посты</h2>
                <button
                    className="heading-btn heading-right"
                    onClick={nextPage}
                    aria-label="Next posts"
                >
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5" fill="var(--bg)" />
                        <path d="M19 15L26 22L19 29" stroke="var(--primary-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="posts-carousel">
                <div
                    className="posts-track"
                    style={{ transform: `translateX(-${offset}px)` }}
                >
                    {postsData.map((post) => (
                        <div className="card-post-top" key={post.id}>
                            <div className="card-post-top-col">
                                <div className="card-post-top-slot1">
                                    <div className="card-post-top-circle circle"></div>
                                    <div className="card-post-top-col-right">
                                        <p className="card-post-top-text-symbol1 desktop-body">{post.channel}</p>
                                        <div className="subs-b subs2">
                                            <object data="assets/subs/subs-icons-peoples.svg" className="share subs-icons-peoples2" type="image/svg+xml" />
                                            <p className="text-a">{post.subscribers}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-post-top-slot2">
                                    <p className="card-post-top-text-symbol2 desktop-caption">{post.text}</p>
                                    <img src="assets/card-post-top-slot/card-post-top-img.png" className="card-post-top-img" alt="post" />
                                </div>
                            </div>
                            <div className="card-post-top-row-bottom">
                                <div className="row-a row1">
                                    <object data="assets/row/row-seen.svg" className="share row-seen" type="image/svg+xml" />
                                    <p className="text-b">{post.views}</p>
                                </div>
                                <div className="row-a row2">
                                    <object data="assets/row/row-heart.svg" className="share row-seen" type="image/svg+xml" />
                                    <p className="text-b">{post.likes}</p>
                                </div>
                                <div className="row-a row3">
                                    <object data="assets/row/row-share.svg" className="share row-seen" type="image/svg+xml" />
                                    <p className="text-b">{post.reposts}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularPosts;