import { Button, ButtonGroup } from '@mui/material';
import Line from '../../lib/index';

const Demo = () => {
  const clicked = () => {
    Line.share('https://www.npmjs.com/package/lesca-line-share', 'your message');
  };
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <ButtonGroup variant='contained'>
        <Button onClick={clicked}>Share to line</Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
