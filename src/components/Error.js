import { useRouteError } from "react-router-dom";
import { errorImage } from "../utils/constants";
const Error=()=>{

    const err =useRouteError();
    console.log(err);
    return(
        <div>
            {/* /* <h1>oops !!</h1>
            <h2>{err.status}: {err.statusText}</h2> */ }
            <img src={errorImage} alt={err.status} />
        </div>
    )
}
export default Error;


