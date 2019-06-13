import React, { Component } from 'react';
import '../ProjectPage.css';
import SectionHeader from '../../SectionHeader/SectionHeader.js';
import Footer from '../../Footer/Footer.js';
import TagsList from '../../TagsList/TagsList.js';
import BulletList from '../../BulletList/BulletList.js';
import CustomButton from '../../CustomButton/CustomButton.js';

class AstendoEventPage extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <SectionHeader text={'astendo Event'} />
                    <article className='project-page'>
                        <img src={require('./images/astendo-event-thumbnail.png')} className='project-page-header-image' alt='Astendo thumbnail' />
                        <div>
                            <h4 className='project-page-subtitle'>
                                2019 - Company Work
                                    </h4>
                            <h4 className='project-page-subtitle'>
                                My Role: Frontend Developer
                                    </h4>
                            <TagsList
                                title='Technologies:'
                                skills=
                                {[
                                    'Flutter',
                                    'Dart',
                                    'Redux',
                                ]}
                            />
                            <p>
                                astendo Event is a mobile companion app to astendo GmbH's Event Manager software
                                package which is used to organize real-life events. The app facilitates
                                communication and information flow between event goers and event hosts.
                                    <br /><br />
                                I was personally responsible for the creation of screens and UI components, peer-reviewing
                                code and internationalisation of the app.
                                    </p>
                            <BulletList
                                title='Features:'
                                items={[
                                    'online event information access and check-in',
                                    'LiveZilla support chat',
                                    'i18l language internationalisation',
                                    'redux state management',
                                    'server-side customizable UI'
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
                    </article>
                </main>
                <Footer />
            </React.Fragment>
        );
    }

    handleAppStoreButtonPress() {
        window.open('https://itunes.apple.com/de/app/upwards-arcade-jumper/id1464653731?l=en&mt=8')
    }

    handlePlayStoreButtonPress() {
        window.open('https://play.google.com/store/apps/details?id=de.astendo.app&hl=de')
    }
}

export default AstendoEventPage;
