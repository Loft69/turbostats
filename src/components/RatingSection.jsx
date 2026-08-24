import { useState, useEffect } from 'react';

const growthData = {
    '24h': [
        { name: 'TechInsider', subs: '85.4k', value: '+2 340' },
        { name: 'CryptoWave', subs: '120.1k', value: '+5 678' },
        { name: 'BizTalk', subs: '64.2k', value: '+1 234' },
        { name: 'GamePro', subs: '210.5k', value: '+9 876' },
        { name: 'FitnessGuru', subs: '43.7k', value: '+3 210' },
        { name: 'TravelDiary', subs: '32.9k', value: '+1 890' },
        { name: 'MovieManiac', subs: '77.3k', value: '+4 567' },
    ],
    week: [
        { name: 'TechInsider', subs: '85.4k', value: '+15 234' },
        { name: 'CryptoWave', subs: '120.1k', value: '+28 901' },
        { name: 'BizTalk', subs: '64.2k', value: '+8 765' },
        { name: 'GamePro', subs: '210.5k', value: '+42 111' },
        { name: 'FitnessGuru', subs: '43.7k', value: '+12 345' },
        { name: 'TravelDiary', subs: '32.9k', value: '+7 654' },
        { name: 'MovieManiac', subs: '77.3k', value: '+19 876' },
    ],
};

const viewsData = {
    '24h': [
        { name: 'NewsDaily', subs: '210k', value: '45 678' },
        { name: 'MusicVibes', subs: '180k', value: '32 109' },
        { name: 'ScienceLab', subs: '95k', value: '21 543' },
        { name: 'FoodieJoy', subs: '142k', value: '28 765' },
        { name: 'FashionLook', subs: '76k', value: '14 321' },
        { name: 'AutoWorld', subs: '54k', value: '9 876' },
        { name: 'HistoryDoc', subs: '68k', value: '11 234' },
    ],
    week: [
        { name: 'NewsDaily', subs: '210k', value: '312 456' },
        { name: 'MusicVibes', subs: '180k', value: '198 765' },
        { name: 'ScienceLab', subs: '95k', value: '143 210' },
        { name: 'FoodieJoy', subs: '142k', value: '189 543' },
        { name: 'FashionLook', subs: '76k', value: '98 765' },
        { name: 'AutoWorld', subs: '54k', value: '67 890' },
        { name: 'HistoryDoc', subs: '68k', value: '76 543' },
    ],
};

const qualityData = {
    '24h': [
        { name: 'EduCenter', subs: '45k', value: '9.2' },
        { name: 'HealthPlus', subs: '89k', value: '8.7' },
        { name: 'FinancePro', subs: '112k', value: '9.8' },
        { name: 'SportLife', subs: '67k', value: '7.5' },
        { name: 'ArtGallery', subs: '23k', value: '8.3' },
        { name: 'NatureWorld', subs: '36k', value: '9.0' },
        { name: 'TechReview', subs: '78k', value: '8.9' },
    ],
    week: [
        { name: 'EduCenter', subs: '45k', value: '9.5' },
        { name: 'HealthPlus', subs: '89k', value: '8.9' },
        { name: 'FinancePro', subs: '112k', value: '9.9' },
        { name: 'SportLife', subs: '67k', value: '7.8' },
        { name: 'ArtGallery', subs: '23k', value: '8.6' },
        { name: 'NatureWorld', subs: '36k', value: '9.1' },
        { name: 'TechReview', subs: '78k', value: '9.0' },
    ],
};

const RatingCard = ({ title, data, period, setPeriod, isQuality = false }) => {
    const currentData = data[period];
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAnimating(true);
        const timer = setTimeout(() => setAnimating(false), 400);
        return () => clearTimeout(timer);
    }, [period]);

    return (
        <div className={isQuality ? "rating-card-b rating-card3" : "rating-card-a"}>
            <div className="rating-card-heading">
                <p className="rating-card-text1">{title}</p>
                <div className="time time1">
                    <button
                        className={`time-btn-select hover-bright ${period === '24h' ? 'time-btn-select1' : 'time-btn-select2'}`}
                        onClick={() => setPeriod('24h')}
                    >
                        24h
                    </button>
                    <button
                        className={`time-btn-select hover-bright ${period === 'week' ? 'time-btn-select1' : 'time-btn-select2'}`}
                        onClick={() => setPeriod('week')}
                    >
                        Неделя
                    </button>
                </div>
            </div>
            <div className={isQuality ? "rating-card-col2" : "rating-card-col1"}>
                {currentData.map((item, idx) => (
                    <div className="increase" key={idx}>
                        <div className="increase-name">
                            <div className="increase-circle circle"></div>
                            <div className="increase-col">
                                <p className="increase-text-symbol desktop-body">{item.name}</p>
                                <div className="subs-a subs1">
                                    <object data="assets/subs/subs-icons-peoples.svg" className="subs-icons-peoples-people subs-icons-peoples1" type="image/svg+xml" />
                                    <p className="subs-text1 desktop-legal">{item.subs}</p>
                                </div>
                            </div>
                        </div>
                        <p className={`increase-text ${animating ? 'animated-value changing' : 'animated-value'}`}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const RatingSection = () => {
    const [growthPeriod, setGrowthPeriod] = useState('24h');
    const [viewsPeriod, setViewsPeriod] = useState('24h');
    const [qualityPeriod, setQualityPeriod] = useState('24h');

    return (
        <div className="row8">
            <RatingCard
                title="Прирост"
                data={growthData}
                period={growthPeriod}
                setPeriod={setGrowthPeriod}
            />
            <RatingCard
                title="Просмотры"
                data={viewsData}
                period={viewsPeriod}
                setPeriod={setViewsPeriod}
            />
            <RatingCard
                title="Качество канала"
                data={qualityData}
                period={qualityPeriod}
                setPeriod={setQualityPeriod}
                isQuality={true}
            />
        </div>
    );
};

export default RatingSection;