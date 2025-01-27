import React from "react";
import InputField from "../components/InputField";

const Login = () => {
    const handleInputChange = (name, value) => {
        console.log(`${name}: ${value}`);
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Bejelentkezés</h1>
            <form className="space-y-4">
                <InputField
                    item={{ label: "Email", name: "email", fieldType: "email", required: true }}
                    handleInputChange={handleInputChange}
                />
                <InputField
                    item={{ label: "Jelszó", name: "password", fieldType: "password", required: true }}
                    handleInputChange={handleInputChange}
                />
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
                    Bejelentkezés
                </button>
            </form>
        </div>
    );
};

export default Login;
