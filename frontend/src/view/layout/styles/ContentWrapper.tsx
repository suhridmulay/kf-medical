import { styled } from '@material-ui/core/styles';

const ContentWrapper = styled('div')({
  marginTop: '16px',
  padding: '24px',
  backgroundColor: '#fff',
  width: '100%',
  border: '1px solid #dee2e6 !important',
  borderRadius: '5px',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  maxHeight: 'calc(100vh - 12em)'
});

export default ContentWrapper;
