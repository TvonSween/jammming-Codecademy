import React from 'react';
import './Track.css';

//import SearchResults from '../SearchResults/SearchResults';
//import SearchBar from '../SearchBar/SearchBar';
//import Playlist from '../Playlist/Playlist';
//import TrackList from '../TrackList/TrackList';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action"
            onClick = {this.removeTrack }> - </button>
        } else {
            return <button className = "Track-action"
            onClick = {this.addTrack}> + </button>
        }
    }

    addTrack() {
        //checks whether track we want to add already has id on playlist - if not will add
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        return ( 
          <div className="Track" >
            <div className="Track-information" >
            <h3> { this.props.track.name } </h3> 
            <p> { this.props.track.artist } | { this.props.track.album } </p> 
            </div>
            {this.renderAction()} 
            </div>
        )
    }
}
export default Track;