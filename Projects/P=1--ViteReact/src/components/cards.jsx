import React from 'react'
function cards({username, btnText="submit"}) {    // either use function cards(props) and then use props.username or we can use as we have used (it is called destructuring)
    return (
        <div>
            <h2>{username}</h2>
        </div>
    )
}