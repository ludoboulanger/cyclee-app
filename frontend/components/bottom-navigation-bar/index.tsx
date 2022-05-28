
import React from 'react';
import { styled } from '@mui/system';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
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

const StyledBottomNavigation = styled(BottomNavigation)({
    width: '100%',
    position: 'fixed',
    bottom: 0,
    shadowOffset: {width: 0, height: 2,},
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 7,
});

const BottomNavigationBar: React.FC = () => {
    const [value, setValue] = useState(0);
    const {t} = useTranslation(['navigation']);

    return (
        <StyledBottomNavigation showLabels value={value} onChange={(e, v) => setValue(v)} aria-label="NavigationBar">
            <BottomNavigationAction 
                icon={value === 0 ? <Home /> : <HomeOutlined />} 
                label={t('navigation:navigationBar.home.label')}
            />
            <BottomNavigationAction 
                icon={value === 1 ? <ChatBubble /> : <ChatBubbleOutline/>} 
                label={t('navigation:navigationBar.message.label')}
            />
            <BottomNavigationAction
                icon={value === 2 ? <AddBox /> : <AddBoxOutlined />}
                label={t('navigation:navigationBar.newListing.label')}
            />
            <BottomNavigationAction 
                icon={value === 3 ? <Favorite /> : <FavoriteBorderOutlined />} 
                label={t('navigation:navigationBar.favorite.label')} 
            />
            <BottomNavigationAction 
                icon={<Menu />} 
                label={t('navigation:navigationBar.menu.label')} 
            />
        </StyledBottomNavigation>      
    );
};

export default BottomNavigationBar;