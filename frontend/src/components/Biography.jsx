import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>who we are</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam voluptate quo nesciunt asperiores illum consectetur tempore odio quos natus odit, voluptatem, ipsa libero laboriosam beatae ducimus animi ea sed cum iure aliquam reiciendis, suscipit commodi! Illo nostrum consequuntur repellendus! Totam facilis autem est accusamus rerum ducimus ex earum doloribus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore impedit error fugiat excepturi adipisci dolorem! Laboriosam odio ullam neque, sapiente ab cum! Rerum, quasi! Blanditiis expedita maiores mollitia nemo harum inventore omnis nostrum, adipisci dolorem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, optio?</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}

export default Biography
