import {it,expect} from 'bun:test'
import {tryCatch,tryCatchAsync} from './index.js'

it('should return null when the input is an empty string', () => {
    const [error, result] = tryCatch(() => {
        return null
    });
    expect(error).toBeNull();
    expect(result).toBeNull();
});


it('should return a custom error message when the input is invalid', () => {
    const [error, result] = tryCatch(() => {
        throw new Error('Invalid input');
    });
    expect(error).not.toBeNull();
    expect(error.message).toBe('Invalid input');
    expect(result).toBeNull();
});


it('should return boolean value true', () => {
    const [error, result] = tryCatch(() => {
        return true;
    });
    expect(error).toBeNull();
    expect(result).toBe(true);
});


it('should handle async function with tryCatchAsync', async () => {
    const [error, result] = await tryCatchAsync(async () => {
        return Promise.resolve('Async result');
    });
    expect(error).toBeNull();
    expect(result).toBe('Async result');
});

it('should handle async function throwing error with tryCatchAsync', async () => {
    const [error, result] = await tryCatchAsync(async () => {
        throw new Error('Async error');
    });
    expect(error).not.toBeNull();
    expect(error.message).toBe('Async error');
    expect(result).toBeNull();
});