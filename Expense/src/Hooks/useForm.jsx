import React, { useState } from "react";

const useForm = (initalValue = {}) => {
  const [formData, setFormData] = useState(initalValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormData(initalValue);
  };
  return { formData, handleChange, resetForm };
};

export default useForm;
