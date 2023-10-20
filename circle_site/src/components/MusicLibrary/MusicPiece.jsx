import parse from 'html-react-parser';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Table from './PartDistributions';
import { musicLib } from './exampleMusicLibrary';

function MusicPiece() {
    const { id } = useParams()
    const piece = musicLib.find(music => music.id == id)
    const htmlString = parse(piece.museScore)

    const [display, setDisplay] = useState(true)


    const toggleNav = () => {
        setDisplay(!display);
    };
    return (
        <div className="musicPiece" style={{ width: "90%", height: "85%" }}>
            {/* Titile with name of pice */}
            <span style={{ display: 'flex' }}>
                <NavLink className='navlinks' navlinksexact to="/music">
                    <h1>
                        Music Library
                    </h1>
                </NavLink>
                <h1> / {piece.name}</h1>
            </span>
            {/* Part Distributions */}
            <div >
                <button onClick={toggleNav}>
                    Parts
                </button>
                {display && <Table data={piece.parts}/>}
            </div>
            {/* Downloadable PDF */}
            {/* MuseScore Embedd */}
            {htmlString}
        </div>

    )
}

export default MusicPiece
