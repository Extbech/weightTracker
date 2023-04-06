import dayjs from "dayjs";

async function SubmitWeight(name: string, date: dayjs.Dayjs, weight: number) {
    const url = "http://localhost:5000/Add_Weight";
    const reqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, date: date.format('YYYY-MM-DD'), weight: weight })
    };
    try {
        const response = await fetch(url, reqOptions);
        const data = await response.json();
        if (data.msg) {
            return data.msg;
        } else {
            return "Unexpected response from server";
        }
    } catch (err) {
        return "Failed to submit weight: "
    }
};
export default SubmitWeight;