import React from 'react';
import { useIsMobile } from '../responsive-viewport';
import { AppBar, styled, Toolbar } from '@mui/material';
import SearchBar from '../search-bar';
import Logo from '../../public/assets/logo/logo.svg';
import NavigationTabs, { TabsVariant } from '../navigation-tabs';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#fff',
    position: 'fixed'
});

const StyledGrid = styled('div')<{mobile: string}>(({mobile}) => ({
    display: 'grid',
    gridTemplateColumns: mobile === 'true' ? '1fr 1fr' : '1fr 2fr 1fr',
    width: '100%'
}));

const StyledLeftContent = styled('div')({
    gridColumn: '1 / 1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

const StyledRightContent = styled('div')<{mobile: string}>(({mobile}) => ({
    gridColumn: '2 / 2',
    display: 'flex',
    justifyContent: mobile === 'true' ? 'flex-end' : 'center'
}));

const StyledLogo = styled(Logo)({
    height: '40px',
    width: 'auto'
});

const NavigationBar: React.FC = () => {
    const isMobile = useIsMobile();

    return(
        <>
            <StyledAppBar>
                <Toolbar>
                    <StyledGrid mobile={isMobile.toString()}>
                        <StyledLeftContent>
                            <StyledLogo />
                            {!isMobile && <SearchBar />}
                        </StyledLeftContent>
                        <StyledRightContent mobile={isMobile.toString()}>
                            {isMobile ? 
                                    <SearchBar /> 
                                : 
                                    <NavigationTabs variant={TabsVariant.Standard} />
                            }
                        </StyledRightContent>
                    </StyledGrid>
                </Toolbar>
            </StyledAppBar>

            {/* Ugly fix to prevent appbar hidding content beneath it */}
            <Toolbar/>
        </>
    );
};

export default NavigationBar;