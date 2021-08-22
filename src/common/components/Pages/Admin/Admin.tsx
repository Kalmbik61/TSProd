import React, { useState } from "react";
import firebase from "../../../../firebase";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import NewsPost from "../../global/NewsPost/NewsPost";

const storage = firebase.storage();
const database = firebase.firestore().collection("news");

export default function Admin() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [previewDate, setPreviewDate] = useState<string>("");
  const [previewText, setPreviewText] = useState<string>("");
  const [onLoadDataToFB, setomLoadDataToFB] = useState<boolean>(false);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      title: "",
      date: "",
      text: "",
    },
  });
  const onLogin = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((res) => {
        setLogin(true);
        setLoading(false);
      })
      .catch((error) => {
        setError(`${error.code}, message: ${error.message}`);
        setLoading(false);
      });
  };

  const notLoginRender = () => (
    <>
      <input
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", color: "#fff", border: "1px solid #fff", padding: 10 }}
        placeholder='email'
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        style={{ width: "100%", color: "#fff", border: "1px solid #fff", padding: 10 }}
        placeholder='pass'
        type='password'
      />
      <button
        onClick={onLogin}
        style={{ color: "#000", background: "#fff", width: 50, margin: "0 auto" }}
      >
        submit
      </button>
      {<span style={{ color: "red" }}> {error}</span>}
    </>
  );
  const onSubmit = async (data: any) => {
    setomLoadDataToFB(true);
    let url;
    await storage
      .ref("images/" + acceptedFiles[0].name)
      .put(acceptedFiles[0])
      .then((res) => setUploadStatus("File successfully upload!"))
      .catch((error) => setUploadStatus(error.message));
    await storage
      .ref("images")
      .child(acceptedFiles[0].name)
      .getDownloadURL()
      .then((urlString) => {
        url = urlString;
      })
      .catch((error) => setUploadStatus(error.message));
    const postData = {
      id: uuidv4(),
      title: data.title,
      date: data.date,
      text: data.text,
      img: url,
    };
    await database
      .doc()
      .set(postData)
      .then((res) => {
        reset({
          title: "",
          date: "",
          text: "",
        });
        setUploadStatus("");
        setomLoadDataToFB(false);
      })
      .catch((error) => setUploadStatus(error));
  };
  const loginRender = () => (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 20 }}>
      <input
        style={{ width: "100%", color: "#fff", border: "1px solid #fff", padding: 10 }}
        placeholder='Title'
        {...register("title")}
        onChange={(e) => setPreviewTitle(e.target.value)}
      />
      <input
        style={{ width: "100%", color: "#fff", border: "1px solid #fff", padding: 10 }}
        placeholder='date'
        type='date'
        {...register("date")}
        onChange={(e) => setPreviewDate(e.target.value)}
      />
      <div
        tabIndex={0}
        {...getRootProps({ className: "upload" })}
        style={{
          width: "100%",
          color: "#fff",
          border: "1px solid #fff",
          padding: 10,
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} accept='.png, .jpg, .jpeg, .bmp, .heic' />
        UPLOAD <br />
        {acceptedFiles[0] && acceptedFiles[0].name}
        <br />
        {uploadStatus && <span style={{ color: "green" }}>{uploadStatus}</span>}
      </div>
      <textarea
        style={{
          width: "100%",
          color: "#fff",
          border: "1px solid #fff",
          padding: 10,
          background: "transparent",
          height: 200,
        }}
        placeholder='Description'
        {...register("text")}
        onChange={(e) => setPreviewText(e.target.value)}
      />
      <button
        type='submit'
        style={{ color: "#000", background: "#fff", width: 200, margin: "0 auto" }}
      >
        submit
      </button>
    </form>
  );
  return (
    <div style={{ display: "grid", gap: 50, gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
      <h1 style={{ textAlign: "center", fontSize: 50, gridColumn: "1/3" }}> ADMIN PANNEL</h1>
      {onLoadDataToFB && (
        <h2 style={{ textAlign: "center", fontSize: 50, gridColumn: "1/3" }}>Sending...</h2>
      )}
      <div style={{ display: "grid", gap: 20 }}>
        {loading ? (
          <div style={{ margin: "100px", textAlign: "center" }}>Loading...</div>
        ) : !login ? (
          notLoginRender()
        ) : (
          loginRender()
        )}
      </div>
      <NewsPost
        postsData={{
          title: previewTitle,
          text: previewText.replace(/\n/g, "<br/>"),
          date: previewDate,
          id: "1123dsfdf32dfgdhdh",
          img: acceptedFiles[0] && URL.createObjectURL(acceptedFiles[0]),
        }}
      />
    </div>
  );
}
