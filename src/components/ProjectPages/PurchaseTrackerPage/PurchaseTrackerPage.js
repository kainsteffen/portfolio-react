import React, { Component } from 'react';
import '../ProjectPage.css';
import Navbar from '../../Navbar/Navbar.js';
import SectionHeader from '../../SectionHeader/SectionHeader.js';
import Footer from '../../Footer/Footer.js';
import TagsList from '../../TagsList/TagsList.js';
import BulletList from '../../BulletList/BulletList.js';
import CustomButton from '../../CustomButton/CustomButton.js';
import Space from '../../Space/Space.js';


class PurchaseTrackerPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <body>
                    <Navbar />
                    <main>
                        <SectionHeader text={'Purchase Tracker'} />
                        <article className='project-page'>
                            <div className='project-page-content'>
                                <img src={require('./images/purchase-tracker-thumbnail.png')} className='project-page-header-image' />
                                <div>
                                    <h4 className='project-page-subtitle'>
                                        2019 - Personal Project
                                    </h4>
                                    <TagsList
                                        title='Technologies:'
                                        skills=
                                        {[
                                            'Flutter',
                                            'Dart',
                                        ]}
                                    />
                                    <p>
                                        Purchase Tracker is a financial mobile app to manage your
                                        personal spendings in a simple and efficient manner.
                                    <br /><br />
                                        Users can keep track of their purchases on a monthly basis
                                        to check on their budgeting performances in beautiful and easy-to-understand
                                        charts and graphs.
                                    </p>
                                    <BulletList
                                        title='Features:'
                                        items={[
                                            'monthly purchases tracking',
                                            'monthly spending limits',
                                            'budget performance visualisation with charts and graphs',
                                            'customizable purchase categories',
                                            'data backup and restore',
                                            'dark and light app themes'
                                        ]}
                                    />
                                    <div className='project-page-links'>
                                        <CustomButton
                                            label='App Store'
                                            leadingIcon={require('../images/apple-logo.svg')}
                                            onPress={this.handleAppStoreButtonPress.bind(this)}
                                        />

                                        <CustomButton
                                            label='Google Play'
                                            leadingIcon={require('../images/android-logo.svg')}
                                            onPress={this.handlePlayStoreButtonPress.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                        </article>
                    </main>
                    <Footer />
                </body>
            </div >
        );
    }

    handleAppStoreButtonPress() {
        window.open('https://itunes.apple.com/de/app/purchase-tracker/id1457110640?l=en&mt=8')
    }

    handlePlayStoreButtonPress() {
        window.open('https://play.google.com/store/apps/details?id=com.KAIN.purchasetracker')
    }
}

export default PurchaseTrackerPage;
