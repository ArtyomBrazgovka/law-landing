import { Input } from "./../Input/Input.jsx";
import { useState } from 'react';

export function NameInput(props) {
    const [error, setError] = useState("");

    const validateName = (name) => {
        if (name.length < 2) return "Имя слишком короткое";
        if (name.length > 50) return "Имя слишком длинное";
        return "";
    };

    const handleChange = (e) => {
        if (props.onChange) props.onChange(e);
        const errorMessage = validateName(e.target.value);
        setError(errorMessage);
    };

    return (
        <Input
            type="text"
            {...props}
            onChange={handleChange}
            error={error || props.error}
        />
    );
}

