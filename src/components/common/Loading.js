import ClipLoader from "react-spinners/ClipLoader";

const override = {

    display: "block",
    margin: "0 auto",
    borderColor: "blue",
}
    ;


const Loading = () => <ClipLoader color="black" css={override} size={150} />



export default Loading