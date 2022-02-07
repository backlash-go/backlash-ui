import {ConfigEnv, loadEnv, UserConfig} from 'vite';


import vue from '@vitejs/plugin-vue';
import path from 'path';


import viteSvgIcons from 'vite-plugin-svg-icons';


export default {
  plugins: [viteSvgIcons({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  }),vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  }
};

// export default ({mode}: ConfigEnv): UserConfig => {
//   return {
//     plugins: [
//       vue(),
//       //@ts-ignore
//       md(),
//       viteSvgIcons({
//         // Specify the icon folder to be cached
//         iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
//         // Specify symbolId format
//         symbolId: 'icon-[dir]-[name]',
//       })
//     ],
//     resolve: {
//       alias: {
//         '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
//       }
//     }
//   };
// }
