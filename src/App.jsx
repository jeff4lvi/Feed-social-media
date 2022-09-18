import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post'

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/dantxal.png',
      name: 'Daniel Teixeira',
      role: 'Developer'
    },
    content:[
      {type: 'paragraph', content: 'Fala galera',},
      {type:'paragraph', content:'teste testes estasda kaçls~dk asdçaskdasdç ajd asda skdja sdas'},
      {type: 'link', content:'link.vlink/likxs'},
    ],
    publishedAt: new Date('2022-05-11 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/jeff4lvi.png', 
      name: 'Jeff Django',
      role: 'Developer React'
    },
    content:[
      {type: 'paragraph', content: 'Fala galera',},
      {type:'paragraph',content:'test tests working in progress'},
      {type: 'link' ,content:'link.dlink/likxs'},
    ],
    publishedAt: new Date('2022-07-10 08:13:30'),
  },
];

export function App() {
  return (
   <div>
    <Header />
      
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
         {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
     </div>
    </div>
   )
}

export default App
