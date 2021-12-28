import {ConfigEnv, loadEnv, UserConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

import viteSvgIcons from 'vite-plugin-svg-icons';


export default ({mode}: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    }
  };
}
