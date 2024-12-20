/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { Select, MenuItem } from '@mui/material';
import { theme } from '../../styles/theme';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid black',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 5,
      // borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomizedSelects({ submitSort }) {
  const [sort, setSort] = React.useState('최신 순');
  const handleChange = (event) => {
    setSort(event.target.value);
    submitSort(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard">
        <Select value={sort} input={<BootstrapInput />} onChange={handleChange} style={{ width: '120px' }}>
          {/* 홍빈이형이랑 연결 시 색 변경 */}
          <MenuItem
            value={'최신 순'}
            style={{ backgroundColor: sort === '최신 순' ? `${theme.colors.darkGray}` : 'white' }}
          >
            최신 순
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: sort === '좋아요 순' ? `${theme.colors.darkGray}` : 'white' }}
            value={'좋아요 순'}
          >
            좋아요 순
          </MenuItem>
          <MenuItem
            style={{ backgroundColor: sort === '오래된 순' ? `${theme.colors.darkGray}` : 'white' }}
            value={'오래된 순'}
          >
            오래된 순
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
