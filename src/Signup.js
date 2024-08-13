// import React, { useState } from "react";

// function Signup({ onSignup, switchToLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [musicType, setMusicType] = useState("");
//   const [details, setDetails] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your signup logic here
//     onSignup();
//   };

//   return (
//     <div className="container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">
//             Gender
//           </label>
//           <select
//             id="gender"
//             className="form-control"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="musicType" className="form-label">
//             Music Type
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="musicType"
//             value={musicType}
//             onChange={(e) => setMusicType(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="details" className="form-label">
//             Details
//           </label>
//           <textarea
//             id="details"
//             className="form-control"
//             rows="3"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </form>
//       <p className="mt-3">
//         Already have an account?{" "}
//         <a href="#" onClick={switchToLogin}>
//           Login here
//         </a>
//       </p>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";

function Signup({ onSignup, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [musicType, setMusicType] = useState("");
  const [details, setDetails] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    // Basic email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      email: !validateEmail(email) ? "Invalid email format" : "",
      password: !validatePassword(password)
        ? "Password must be at least 6 characters long"
        : "",
    };

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // Implement your signup logic here
    onSignup();
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" }); // Clear error on input change
            }}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" }); // Clear error on input change
            }}
            required
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            id="gender"
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="musicType" className="form-label">
            Music Type
          </label>
          <input
            type="text"
            className="form-control"
            id="musicType"
            value={musicType}
            onChange={(e) => setMusicType(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <textarea
            id="details"
            className="form-control"
            rows="3"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <p className="mt-3">
        Already have an account?{" "}
        <a href="#" onClick={switchToLogin}>
          Login here
        </a>
      </p>
    </div>
  );
}

export default Signup;
