import React from 'react'; 
import { useIsMobile } from '../responsive-viewport';
import DesktopLandingPage from './desktop-landing-page';
import MobileLandingPage from './mobile-landing-page';

const LandingPage: React.FC = () => {
    const isMobile = useIsMobile();

    return(
        <>
            {isMobile ?
                <MobileLandingPage />
            :
                <DesktopLandingPage />
            }
        </>
    );
};

export default LandingPage;