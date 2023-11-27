import { useState } from "react";

export const useArrayFilter = (array, property) => {
    let arrayFiltered = array;

    const [textFilter, setTextFilter] = useState("");

    if (textFilter != "") {
        let newData = [];
        arrayFiltered.map(function (i) {
            if (
                i[property].toLowerCase().search(textFilter.toLowerCase()) != -1
            ) {
                newData.push(i);
            }
        });
        arrayFiltered = newData;
    }

    if (arrayFiltered === undefined){
        arrayFiltered = []
    }
    return {
        arrayFiltered,
        setTextFilter,
    };
};
