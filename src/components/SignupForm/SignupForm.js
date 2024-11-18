import { useState } from 'react';
import axios from '../../api/axiosInstance';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import styles from './SignupForm.module.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    age: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { repeatPassword, ...data } = formData;
      if (data.password !== repeatPassword) {
        setErrors({ ...errors, repeatPassword: 'Passwords must match' });
        return;
      }
      await axios.post(`/signup`, data);
      alert('Signup successful');
    } catch (error) {
      setErrors(error.response.data.errors || {});
    }
  };

  return (
    <form className={styles.authFormBody} onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        onChange={handleChange}
        className={errors.username ? styles.errorInput : ''}
      />
      {errors.username && <div className={styles.error}>{errors.username}</div>}

      <InputField
        label="Password"
        name="password"
        onChange={handleChange}
        className={errors.password ? styles.errorInput : ''}
      />
      {errors.password && <div className={styles.error}>{errors.password}</div>}

      <InputField
        label="Repeat Password"
        name="repeatPassword"
        onChange={handleChange}
        className={errors.repeatPassword ? styles.errorInput : ''}
      />
      {errors.repeatPassword && (
        <div className={styles.error}>{errors.repeatPassword}</div>
      )}

      <InputField
        label="First Name"
        name="firstName"
        onChange={handleChange}
        className={errors.firstName ? styles.errorInput : ''}
      />
      {errors.firstName && (
        <div className={styles.error}>{errors.firstName}</div>
      )}

      <InputField
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        className={errors.lastName ? styles.errorInput : ''}
      />
      {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}

      <InputField
        label="Age"
        name="age"
        onChange={handleChange}
        className={errors.age ? styles.errorInput : ''}
      />
      {errors.age && <div className={styles.error}>{errors.age}</div>}

      <Button type="submit" buttonStyle="submitButton">
        Sign Up
      </Button>
    </form>
  );
}

export default SignupForm;
