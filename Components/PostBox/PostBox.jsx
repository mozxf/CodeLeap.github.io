


export const PostBox = ({title, username, date, content }) => {


    return (
        <div className={styles.postWrapper}>
                <header className={styles.postHeader}>Title</header>
                <span className={styles.postUsername}>Username</span>
                <span className={styles.postTime}>time</span>
                <p className={styles.postContent}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nulla assumenda a soluta ad libero officiis necessitatibus eum amet. Tempore distinctio eveniet aut repudiandae esse numquam corporis. Itaque, maxime illo.</p>
            </div>
    )
}