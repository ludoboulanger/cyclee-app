
import React from 'react';
import { styled } from '@mui/system';
import { Tab, Tabs} from '@mui/material';
import { useState } from 'react';
import { 
    AddBox, 
    AddBoxOutlined, 
    ChatBubble, 
    ChatBubbleOutline, 
    Favorite, 
    FavoriteBorderOutlined, 
    Home, 
    HomeOutlined, 
    Menu } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';

interface Props {
    variant: TabsVariant;
}

export enum TabsVariant {
    FullWidth = "fullWidth",
    Standard = "standard",
    Scrollable = "scrollable"
}

const StyledTabs = styled(Tabs)({
    flexWrap: 'wrap'
});

const StyledTab = styled(Tab)({
    textTransform: 'none',
    fontWeight: 'lighter'
});

const NavigationTabs: React.FC<Props> = ({variant}) => {
    const {t} = useTranslation(['navigation']);

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <StyledTabs centered variant={variant} value={tabIndex} onChange={(e, v) => setTabIndex(v)} aria-label="NavigationBar">
            <StyledTab 
                icon={tabIndex === 0 ? <Home /> : <HomeOutlined />} 
                label={t('navigation:navigationBar.home.label')}
            />
            <StyledTab 
                icon={tabIndex === 1 ? <ChatBubble /> : <ChatBubbleOutline/>} 
                label={t('navigation:navigationBar.message.label')} 
            />
            <StyledTab 
                icon={tabIndex === 2 ? <AddBox /> : <AddBoxOutlined />} 
                label={t('navigation:navigationBar.newListing.label')} 
            />
            <StyledTab 
                icon={tabIndex === 3 ? <Favorite /> : <FavoriteBorderOutlined />} 
                label={t('navigation:navigationBar.favorite.label')} 
            />
            <StyledTab 
                icon={<Menu />} 
                label={t('navigation:navigationBar.menu.label')} 
            />
        </StyledTabs>      
    );
};

export default NavigationTabs;