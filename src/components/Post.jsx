import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
const [comments, setComments] = useState([
  'Nice post!!'
])
    const [newCommentText , setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        
        

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
      event.target.setCustomValidity('this field is mandatory!');   
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComments(commentWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0 

    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                  <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                  </div>
                </div>

                <time title="" dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type ==='paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                     } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                     }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name= "comment" 
                    placeholder="Leave your comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                  <button type='submit' disabled={isNewCommentEmpty}>Post</button>
                </footer>
            </form>

            <div className={styles.commentList}>
             {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
             })}
            </div>
        </article>
    )
}