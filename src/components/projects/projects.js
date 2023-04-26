import './projects.css'

export default function Projects() {
    return (
        <div id="projects" className="portfolio">
                <h3 className='stitle'>My portfolio</h3>
                <h1 className='ltitle'>Some Of My Latest Work</h1>
                <div className="project-hub">
                    <div className="single-project">
                        <img className="img" src='images/10.png' alt="" />
                        <a className="mtitle" href="https://github.com/ogcodez/petar-portfolio">Petar's portfolio</a>
                    </div>
                    <div className="single-project">
                        <img className="img" src='images/12.png' alt="" />
                        <a className="mtitle" href='https://github.com/ogcodez/TenziesGame'>Tenzies game</a>
                    </div>
                    <div className="single-project">
                        <img className="img" src='images/11.png' alt="" />
                        <a className="mtitle" href=''>Meme Generator</a>
                    </div>
                </div>
        </div>
    )
}