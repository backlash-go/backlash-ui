
import {ConfigEnv, loadEnv, UserConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

export default ({mode}: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    }
  };
}
