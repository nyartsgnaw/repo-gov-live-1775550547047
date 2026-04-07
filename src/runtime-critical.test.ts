import { describe, expect, it } from 'vitest';
import { healthRoute } from './api/routes';
import { createEmbedding } from './clients/openai-client';
import { getUserDisplayName } from './domain/user-service';

describe('runtime critical fixture coverage', () => {
  it('covers the route handler and domain function', () => {
    expect(healthRoute()).toBe('ok');
    expect(getUserDisplayName(' Ada ')).toBe('Ada');
  });

  it('covers the OpenAI client seam', async () => {
    await expect(createEmbedding()).resolves.toBe('embedding');
  });
});
