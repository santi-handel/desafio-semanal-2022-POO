import Reto0 from "../containers/Challenge0";
import Reto1 from "../containers/Challenge1";
import Reto2 from "../containers/Challenge2";

export default function retos() {
    return (
        <>
            <div>
                <br /><h1 className="text-center text-light">RETOS SEMANALES</h1><br />
                <br /><h2 className="text-center text-light">RETOS SEMANAL #1 (10/08/2022 al 17/08/2022)</h2><br />
                <Reto0></Reto0>
                <Reto1></Reto1>
                <Reto2></Reto2>
            </div>
        </>
    );
}
