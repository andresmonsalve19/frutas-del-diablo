import { useState } from "react";

export const useFruitFilter = (fruits) => {
    let fruitsFiltered = fruits;

    const [textFilter, setTextFilter] = useState("");

    if (textFilter != "") {
        let newData = [];
        fruitsFiltered.map(function (i) {
            if (
                i["name"].toLowerCase().search(textFilter.toLowerCase()) != -1
            ) {
                newData.push(i);
            }
        });
        fruitsFiltered = newData;
    }

    return {
        fruitsFiltered,
        setTextFilter,
    };
};
