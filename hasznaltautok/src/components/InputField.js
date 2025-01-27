import React from "react";

const InputField = ({ item, handleInputChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor={item?.name}>
                {item?.label}
            </label>
            <input
                type={item?.fieldType || "text"}
                name={item?.name || ""}
                placeholder={item?.label || ""}
                required={item?.required || false}
                onChange={(event) => handleInputChange(item?.name, event.target.value)}
                className="w-full px-3 py-2 border rounded"
            />
        </div>
    );
};

export default InputField;
