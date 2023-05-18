// import myAlert from "../../myArlert";

//dùng thư viện babel-plugin-module-resolver
import myAlert from "~/myArlert"

function Button() {
    return <button onClick={myAlert}>Click me!</button>
}
export default Button