import { styled } from '@material-ui/core/styles';

const ToolbarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  gap: '2ch',

  '& > *': {
    marginBottom: '8px',
    marginRight: '8px',
    whiteSpace: 'nowrap',
  },
});

export default ToolbarWrapper;
