import useMention, { Mention } from '@/src/hooks/useMention';
import { ReactNode } from 'react';
import { Box, BoxProps, ClickAwayListener, List, MenuItem, MenuList, Paper } from '@mui/material';

type InputProps = Omit<Mention, 'activeItem' | 'onSelect' | 'onClickAway' | 'filteredOptions' | 'fetchingUsers'>;

interface MentionsProps {
  inputHeight: number;
  children: (inputProps: InputProps) => ReactNode;
  style?: BoxProps['style'];
}

export default function Mentions({ children, inputHeight, style }: MentionsProps) {
  const mention = useMention();
  const { activeItem, filteredOptions, onSelect, onClickAway, fetchingUsers, ...rest } = mention;

  const bottom = inputHeight + 4;

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box
        style={style}
        sx={{
          position: 'relative',
          '& .active': {
            background: 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        {filteredOptions.length || fetchingUsers ? (
          <MenuList
            component={Paper}
            sx={{
              position: 'absolute',
              zIndex: 100,
              bottom,
              width: '100%',
              maxHeight: 200,
              overflow: 'auto'
            }}
            aria-label='suggestion list'
          >
            <List>
              {filteredOptions.map((mention, idx) => (
                <MenuItem
                  key={idx}
                  onClick={onSelect(mention)}
                  tabIndex={idx === activeItem ? 1 : -1}
                  className={idx === activeItem ? 'active' : ''}
                >
                  {mention}
                </MenuItem>
              ))}
              {fetchingUsers && !filteredOptions.length ? <MenuItem disabled>loading...</MenuItem> : ''}
            </List>
          </MenuList>
        ) : (
          <></>
        )}
        {children(rest)}
      </Box>
    </ClickAwayListener>
  );
}
