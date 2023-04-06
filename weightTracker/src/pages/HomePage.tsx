import WeightChart from "../components/WeightChart";
import { IResponse } from "../components/WeightChart";
import { useState, useEffect } from "react";
import AddWeight from "../components/AddWeight";
import Card from "../components/Card";


const HomePage = () => {
    const [mailinMax, setMailinMax] = useState<IResponse[]>([]);
    const [benjiMax, setBenjiMax] = useState<IResponse[]>([]);
    const [einarMax, setEinarMax] = useState<IResponse[]>([]);

    const placeData = (data: IResponse[]) => {
        if (data.length > 0) {
            let benji_placeholder: IResponse[] = [];
            let mailin_placeholder: IResponse[] = [];
            let einar_placeholder: IResponse[] = [];
            data.map(el => {
                if (el.name == "Benjamin") {
                    benji_placeholder.push(el);
                } else if (el.name == "Mailin") {
                    mailin_placeholder.push(el)
                } else {
                    einar_placeholder.push(el)
                }
            });
            setBenjiMax(benji_placeholder);
            setMailinMax(mailin_placeholder);
            setEinarMax(einar_placeholder);

        }
    };
    useEffect(() => {
        const url: string = "http://localhost:5000/Get_Max_Weight";
        fetch(url)
            .then(res => res.json())
            .then((result: IResponse[]) => {
                placeData(result);
            },
                (error => {
                    console.log(error);
                })
            );
    }, []);
    return (
        <div className="h-screen grid grid-cols-1 grid-rows-5 gap-6 p-10 bg-gray-900 text-gray-300">
            <div className="grid row-span-4">
                <p className='text-4xl'>Weight Tracker</p>
                <div className="grid grid-cols-2 gap-10 p-10 row-span-4">
                    <WeightChart data={benjiMax} name="Benjamin" />
                    <WeightChart data={mailinMax} name="Mailin" />
                </div>
            </div>
            <div className="row-span-1">
                < AddWeight />
            </div>
        </div>
    );
};
export default HomePage