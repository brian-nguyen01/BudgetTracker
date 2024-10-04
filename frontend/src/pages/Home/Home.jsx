import React from 'react';
import './Home.scss';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ToggleLightDarkButton from '../../components/Buttons/ToggleLightDarkButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import SettingsButton from '../../components/Buttons/SettingsButton';
const Home = () => {
  return (
    <div>
        <h1 className='a'>Color Test</h1>
        <h1 className='b'>Color Test</h1>
        <div className='dark'>
            <h1 className='c'>Color Test</h1>
            <h1 className='d'>Color Test</h1>
        </div>
        <PrimaryButton label={"Hello"} />
        <ToggleLightDarkButton />
        <SecondaryButton label={"Hello"} />
        <SettingsButton />
    </div>
  );
}

export default Home;