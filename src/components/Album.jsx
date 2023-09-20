import { Artists } from './Artists';
import { AlbumImage } from './AlbumImage';
//import { AlbumImages } from "./AlbumImages";
//import { Header } from "./components/Header";


export const Album = ({ name, albumType, image, artists, link }) => {

    console.log('albumn', name, artists);

    return (
        <div className="album-info">
            <div>
                {<AlbumImage image={image} />}
            </div>
            <p>
                <span>Album Name:</span> {name}
            </p>
            <p>
                <span>Album Type:</span> {albumType}
            </p>
            <p>
                <span>Artists:</span> {
                    <Artists artists={artists} />}
            </p>
            {/* Separation of child components */}

        </div>
    )
}

Album.defaultProps = {
    name: "No name information available",
    albumType: "No albumn type available",
};


