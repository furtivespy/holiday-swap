import React from 'react'
import HashtagSelectionPage from '../hashtagSelectionPage/hashtagSelectionPage'


class HomePage extends React.Component {
    render() {
        return (
        <div>
            <h1>Select Some Hashtags</h1>
            <HashtagSelectionPage />
        </div>
        );
    }
}

export default HomePage;
