# try-catch-wrapper

try-catch-wrapper

## Usage
```js
import {tryCatch} from 'try-catch-wrapper'

const [error, result] = tryCatch(() => {
  return JSON.parse('invalid json');
});

if (error) {
  console.error('Error:', error.message);
} else {
  console.log('Result:', result);
}
```

```js
import {tryCatchAsync } from 'try-catch-wrapper'

const asyncTask = async () => {
    throw new Error('Something went wrong');
};

(async () => {
    const [error, result] = await tryCatchAsync(asyncTask);

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Result:', result);
    }
})();
```