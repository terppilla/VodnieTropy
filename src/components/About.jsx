import { aboutInfo } from "../data"
import { useEffect, useState } from "react";
import '../components-style/About.css'
import '../components/Titles'
import H2Titles from "../components/Titles";
export default function About() {
    return (
        <section className="about">
            <H2Titles type="aboutType" />
            <AboutImg />
            <AboutText />
        </section>
    )
}

function AboutImg() {
    return (
        <div className="about-img-wrapper">
            <img src="../../public/about.jpg" alt="теплоход в лесу" />
        </div>
    )
}

function AboutText() {
    const [expanded, setExpanded] = useState({})
    const [isSmallScreen, setIsSmallScreen]  = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 400)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleExpand = (id) => {
        setExpanded(prevExpanded => ({...prevExpanded, [id]: !prevExpanded[id]}))
    }
        return (
        <div className="about-columns-wrapper container">
            {aboutInfo.map((item) => {
                const isExpanded = expanded[item.id] || false
                const shortContent = isSmallScreen ? item.content.split(' ').slice(0, 10).join(' ') + '...' : item.content;            
              return  (
                <div key={item.id} className="about-text-column">
                    <p>
                    {isExpanded ? item.content : shortContent}   
                    </p>
                    {isSmallScreen && (
                <div className="about-btn-wrapper">
                            <button className="about-text-btn" onClick={() => toggleExpand(item.id)}>
                            {isExpanded ? 'Скрыть' : 'Читать дальше'}
                        </button>
                </div>
                    )}
                </div>
            )
         })}
        </div>
    )
}