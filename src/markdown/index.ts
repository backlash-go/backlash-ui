import {h} from 'vue';
import Markdown from '../components/Markdown.vue';
// @ts-ignore
import intro from './intros.md';
// @ts-ignore
// import logs from './logs.md'
// // @ts-ignore
// import blogs from './blogs.md'


const md = string => h(Markdown, {content: string, key: string});

export {intro, md};
