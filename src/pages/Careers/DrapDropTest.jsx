import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false)
  // Handle file selection
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]); // Store the first uploaded file
    }
  }, []);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept: ".pdf,.doc,.docx", // Accept only resume file types
    multiple: false, // Allow only one file
    noClick: true, // Prevent opening file dialog on container click
  });

  // Styles
const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  dropzone: {
    border: "2px dashed #6666661A",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "10px",
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"

  },
  text: {
    fontSize: "16px",
    color: "#00557E",
    marginBottom: "5px"
  },
  button: {
    backgroundColor: isHovered ? "#00A4E4" : "transparent",
    color: isHovered ? "#fff" : "#007F01",
    padding: "10px 15px",
    border: isHovered ? "1px solid #00A4E4" : "1px solid #007F01",
    borderRadius: "0",
    cursor: "pointer",
  },
 
  fileName: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#007bff",
  },
};


  return (
    <div style={styles.container}>
      {/* Drag & Drop Area */}
      <div {...getRootProps()} style={styles.dropzone} className="resume-area">
        <img src="https://trinity-metals.com/wp-content/uploads/2025/03/Vector.svg" alt="" onClick={open} />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p style={styles.text}>Drop the file here...</p>
        ) : (
          <p style={styles.text}>
            Drag & drop your resume here, or use the button below
          </p>
        )}
         

         {/* Upload Button */}
      <button onClick={open} style={styles.button}
         onMouseEnter={() => setIsHovered(true)}    
         onMouseLeave={() => setIsHovered(false)}    
      >
        Upload Resume
      </button>

      </div>

      

      {/* Display Selected File Name */}
      {file && <p style={styles.fileName}>Uploaded: {file.name}</p>}
    </div>
  );
};


export default ResumeUpload;
