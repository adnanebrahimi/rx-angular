import { StrategyCredentialsMap } from './model';
import { getIdleCallbackStrategyCredentialsMap } from './idle-callback';
import { getPostTaskStrategyCredentialsMap } from './post-task';
import { getReactStrategyCredentialsMap } from './react';
import { getChunkStrategyCredentialsMap } from './render-queue/strategy-map';

export function getCustomStrategyCredentialsMap(): StrategyCredentialsMap {
  return {
    ...getIdleCallbackStrategyCredentialsMap(),
    ...getPostTaskStrategyCredentialsMap(),
    ...getReactStrategyCredentialsMap(),
    ...getChunkStrategyCredentialsMap()
  };
}
