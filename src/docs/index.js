import React from 'react';
import { render } from 'react-dom';
import { Navation, Code } from './components';
import Demo from './demo';

import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-line-share';
const name = 'lesca-line-share';
const description = 'simple line share';
const code = `import Line from 'lesca-line-share';

const onClick = () => {
	Line.share('https://github.com/jameshsu1125/lesca-line-share', 'your message');
};
return <button onClick={onClick}>Share to line</button>
`;

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='command' />
				</div>
				<div>
					<h2>add on user-triggered event</h2>
					<Code code={code} />
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
