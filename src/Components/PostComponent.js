import  "./PostComponent.css"


export default function PostComponent({post}) {

const {id, title, body} = post;

    return (
        <div className="Body">
            {id} {title} {body}
        </div>
    );
}