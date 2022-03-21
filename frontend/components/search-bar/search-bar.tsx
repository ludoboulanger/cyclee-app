
import * as React from 'react';
import { styled } from '@mui/system';
import { FormControl, IconButton, OutlinedInput, useMediaQuery } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';

const StyledSearchContainer = styled('div')({
    marginLeft: '20px'
});

const StyledOutlineInput = styled(OutlinedInput)({
    height: '40px',
    fontSize: '14px'
});

const StyledIconButton = styled(IconButton)({
    backgroundColor: '#EEEEEE',
    '&:hover': {
        background: '#EEEEEE',
      }
});

const StyledSearchIcon = styled(Search)({
    color: 'grey'
});

const SearchBar: React.FC = () => {
    const {t} = useTranslation(['navigation']);

    const minimalSearchBar = useMediaQuery('(max-width:1200px)');

    return (
        <StyledSearchContainer>
            {!minimalSearchBar ?
                <FormControl>
                    <StyledOutlineInput 
                        placeholder={t('navigation:searchBar.placeholder')}
                        startAdornment={<StyledSearchIcon/>}
                    />
                </FormControl>
            :
                <StyledIconButton>
                    <StyledSearchIcon/>
                </StyledIconButton>
            }
        </StyledSearchContainer>
    );
};

export default SearchBar;