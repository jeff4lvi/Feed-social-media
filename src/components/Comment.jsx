import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
 
  function handleDeleteComment(){
    onDeleteComment(content);
  }  
  
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jeff4lvi.png" alt="" />
              
              <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Jeff Django</strong>
                        <time title="29 julho às 23:26h" dateTime="2022-07-29 23:26:30">cerca de 1h atrás</time>
                         </div>
                        
                         <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                         </button>
                    </header>
                    
                    <p>{content}</p>
                </div>
                
                <footer>
                  <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Applaud <span>{likeCount}</span>
                  </button>
                </footer>
              </div>
        </div>
    )
 }