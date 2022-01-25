[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
$ npm install lesca-line-share --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-line-share/)

# Usage

```javascript
import Line from 'lesca-line-share';

function clicked() {
	Line.share('https://github.com/jameshsu1125/lesca-line-share', 'your message');
}

<button onClick={clicked}>Share to line</button>;
```

# Methods

| method              | options |    description     | default |
| :------------------ | :-----: | :----------------: | ------: |
| share(url, message) |   url   |   share your url   |         |
|                     | message | message share with |         |
