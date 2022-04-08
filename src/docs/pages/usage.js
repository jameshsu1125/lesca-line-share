import { Button, ButtonGroup } from '@mui/material';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. call share method on click event',
    code: `import Line from '${name}';
    
function clicked() {
  Line.share('https://www.npmjs.com/package/lesca-line-share', 'your message');
}`,
    type: 'js',
  },
  {
    title: '3. in html',
    code: `<button onClick={clicked}></button>`,
    type: 'html',
  },
];

const Usage = () => (
  <div className='Usage'>
    <h2>Usage</h2>
    {codes.map((e) => (
      <div key={e.title}>
        <h3>{e.title}</h3>
        <Code code={e.code} theme={e.type} />
      </div>
    ))}
  </div>
);
export default Usage;
