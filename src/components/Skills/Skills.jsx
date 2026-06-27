import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { logoMap } from '../../assets/icons';

function Skills() {
    const skillsData = [
        {
            category: 'Frontend',
            skills: [
                { id: 1, name: 'HTML', level: 'Advanced' },
                { id: 2, name: 'CSS', level: 'Advanced' },
                { id: 3, name: 'JavaScript', level: 'Intermediate' },
                { id: 4, name: 'React', level: 'Intermediate' },
            ]
        },
        {
            category: 'Backend',
            skills: [
                { id: 5, name: 'Node.js', level: 'Beginner' },
                { id: 6, name: 'PHP', level: 'Beginner' },
                { id: 7, name: 'MySQL', level: 'Beginner' },
            ]
        },
        {
            category: 'UI/UX Design',
            skills: [
                { id: 8, name: 'Figma', level: 'Beginner' },
                { id: 9, name: 'Photoshop', level: 'Beginner' },
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlay, skillsData.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
        setIsAutoPlay(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
        setIsAutoPlay(false);
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
    };

    const currentCategory = skillsData[currentIndex];

    return (
        <section id="skills" className="skills">
            <h1 className="text-3xl font-bold mb-12">My Skills</h1>
            
            <div className="skills-carousel">
                <div className="carousel-container">
                    <div className="carousel-content">
                        <h2 className="text-2xl font-bold mb-8 text-center">{currentCategory.category}</h2>
                        <div className="bento-grid skills-grid">
                            {currentCategory.skills.map((skill, index) => {
                                const LogoComponent = logoMap[skill.name];
                                return (
                                    <div 
                                        key={skill.id} 
                                        className="bento-card skill-card"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {LogoComponent && <LogoComponent />}
                                        <h4>{skill.name}</h4>
                                        <p>{skill.level}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={handlePrev}
                        className="carousel-nav carousel-nav-prev"
                        aria-label="Previous skills"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    <button 
                        onClick={handleNext}
                        className="carousel-nav carousel-nav-next"
                        aria-label="Next skills"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="carousel-indicators">
                    {skillsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleIndicatorClick(index)}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to ${skillsData[index].category}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;