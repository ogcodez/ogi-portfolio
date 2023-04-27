import React from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { BsCircleFill } from 'react-icons/bs'


function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={'section'}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: '80%', md: '50%' }}
      borderRadius={'0.5rem'}
      mb={'4rem'}
    >
      <Box
        sx={{ backgroundColor: '#8c8c8c' }}
        p={'0.5rem'}
        display={'flex'}
        gap={'0.5rem'}
        borderRadius={'0.5rem 0.5rem 0 0'}
        fontSize={'1rem'}
      >
        <BsCircleFill size="14" color="#ff6057" />
        <BsCircleFill size="14" color="#ffbd2e" />
        <BsCircleFill size="14" color="#27c93f" />
      </Box>
      <Box
        py={{ xs: '1rem', md: '2rem' }}
        px={{ xs: '2rem', md: '3rem' }}
        borderRadius={'0 0 0.5rem 0.5rem'}
        sx={{ backgroundColor: '#27242f' }}
        fontSize={'1.5rem'}
        fontFamily={'Courier New, Courier, monospace'}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
