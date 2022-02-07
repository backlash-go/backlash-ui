// @ts-nocheck
import path from 'path';
import {marked} from 'marked'
import fs from 'fs';

const mdToJs = str =>  {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    configureServer: [ //用于开发
       ({app}) => {
        app.use( (ctx , next) => {
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString())
          } else {
             next()
          }
        })
      }
    ],

    transforms: [{ //用于rollup //插件
      test: context => context.path.endsWith('.md'),
      transform: ({code}) => mdToJs(code)
    }]
  }
}
