import { HeartIcon, SpinnerIcon } from "./Icons";
import { useState } from "react";
import './index.css'


function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState("");

    const likeunlikeAction = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(
                "https://www.greatfrontend.com/api/questions/like-button",
                {
                    method: 'post',
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: {
                        action:liked?'unlike':'like'
                    },
                },
            );
       
            if(!response.ok){
                const res = await response.json()
                setError(res.message)
                return
            }
            setLiked(!liked)

        } finally {
            setLoading(false)
        }   
    };
    return (
        <div>
            <button
            disabled={loading}
                onClick={likeunlikeAction}
            >
               {loading?<SpinnerIcon/>:<HeartIcon/>} Like
            </button>
        </div>
    );
}
export default LikeButton