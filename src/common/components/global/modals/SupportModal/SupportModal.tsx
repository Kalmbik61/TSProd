import React, { useEffect, useRef, useState } from "react";
import { SupportModalProps } from "./SupportModal.props";
import cn from "classnames";
import styles from "./SupportModal.module.scss";
import TextField from "../../TextField/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import { REACT_RECAPTCH_KEY } from "../../../../../config";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import close from "../../../../../images/icons/close.png";
import Loader from "../../loader/Loader";
import api from "../../../../../http/api";
import { FieldsTypes, InpitTypes } from "../../TextField/TextField.props";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

enum FormTypes {
  name = "name",
  email = "email",
  message = "message",
}
export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const supBlock = useRef(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const validationSchema = Yup.object({
    name: Yup.string().required("Field is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    message: Yup.string().required("Field is required"),
  });
  const [fileError, setFileError] = useState<string>("");
  const [fileSuccess, setFileSuccess] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [recaptcha, setRecaptcha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (supBlock.current === e.target) {
        onClose(false);
      }
    });

    return document.removeEventListener("click", () => {});
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      setRecaptcha("");
      setError("");
      setSuccess("");
      setLoading(false);
      reset({ email: "", name: "", message: "" });
      setFiles([]);
    }
  }, [isOpen]);
  useEffect(() => {
    if (acceptedFiles.length === 0) return;
    if (acceptedFiles[0].size > 5 * 1024 * 1024) {
      setFileError("The file is too large!");
      setTimeout(() => setFileError(""), 1000);
      setFiles([]);
    } else {
      setFiles(acceptedFiles);
      setFileSuccess("File was sucsessuly upload");
      setTimeout(() => setFileSuccess(""), 1000);
    }
  }, [acceptedFiles]);

  const onError = (errType: FormTypes) => {
    return (
      <ErrorMessage
        render={({ message }) => <div style={{ color: "red", marginTop: 5 }}>{message}</div>}
        errors={errors}
        name={errType}
      />
    );
  };
  const onSubmit = async (data: any) => {
    setLoading(true);
    const dataForm = { ...data, files: acceptedFiles, recaptcha };
    try {
      const res = await api.sendSupport(dataForm);
      if (res.Status === "error") {
        setError("Some error. Please, try again later");
        setLoading(false);
        reset({ email: "", name: "", message: "" });
        console.error(res.Message);
      } else {
        setSuccess("Your message was successfully sent!");
        setLoading(false);
        reset({ email: "", name: "", message: "" });
      }
    } catch (e) {
      reset({ email: "", name: "", message: "" });
      setLoading(false);
      console.error(e);
    }
  };
  const fields = [
    {
      field: FieldsTypes.input,
      placeholder: "Name",
      type: InpitTypes.text,
      validation: true,
      register: { ...register(FormTypes.name) },
      errorType: FormTypes.name,
    },
    {
      field: FieldsTypes.input,
      placeholder: "E-mail",
      type: InpitTypes.email,
      validation: true,
      register: { ...register(FormTypes.email) },
      errorType: FormTypes.email,
    },
    {
      field: FieldsTypes.textarea,
      placeholder:
        "Please enter the details of your request. A member of our support staff will respond soon as possible",
      validation: true,
      register: { ...register(FormTypes.message) },
      errorType: FormTypes.message,
    },
  ];
  const onSuccess = () => {
    return (
      <div className={styles.support}>
        <h2
          className={cn({
            [styles.error]: !!error,
            [styles.success]: !!success,
          })}
        >
          {error || success}
        </h2>
      </div>
    );
  };

  const supportFormRender = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.support)}>
        <span className={styles.close} onClick={() => onClose(false)}>
          <img src={close} alt='...' />
        </span>
        <h2> Support</h2>
        {fields.map(({ field, placeholder, type, validation, register, errorType }, index) => {
          return (
            <>
              <TextField
                field={field}
                className={styles.field}
                placeholder={placeholder}
                type={type}
                validation={validation}
                validRegister={register}
                autoComplete='off'
              />
              {onError(errorType)}
            </>
          );
        })}
        {files.length > 0 && (
          <img className={styles.preview_file} src={URL.createObjectURL(files[0])} alt='file' />
        )}
        {(!!fileError || !!fileSuccess) && (
          <span
            className={cn(styles.file, {
              [styles.ok]: !!fileSuccess,
              [styles.error]: !!fileError,
            })}
          >
            {fileError || fileSuccess}
          </span>
        )}
        <div tabIndex={0} {...getRootProps({ className: styles.upload })}>
          <input {...getInputProps()} accept='.png, .jpg, .jpeg, .bmp, .heic' />
          <div className='upload_text'>
            <svg
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='#DDD9E3'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: 10 }}
            >
              <path d='M1.43388 11.51H3.74388V13.94C3.74388 14.55 4.24388 15.05 4.85388 15.05H15.2839C15.8939 15.05 16.3939 14.55 16.3939 13.94V11.51H18.7139C19.9939 11.51 20.6339 9.97 19.7239 9.06L11.0839 0.42C10.5239 -0.14 9.61388 -0.14 9.05388 0.42L0.41388 9.06C-0.476119 9.96 0.16388 11.51 1.43388 11.51Z' />
              <path d='M15.7639 16.3281H4.39391C4.04391 16.3281 3.75391 16.6181 3.75391 16.9681C3.75391 17.3181 4.04391 17.6081 4.39391 17.6081H15.7639C16.1139 17.6081 16.4039 17.3181 16.4039 16.9681C16.4039 16.6181 16.1139 16.3281 15.7639 16.3281Z' />
              <path d='M15.7639 18.8906H4.39391C4.04391 18.8906 3.75391 19.1806 3.75391 19.5306C3.75391 19.8806 4.04391 20.1706 4.39391 20.1706H15.7639C16.1139 20.1706 16.4039 19.8806 16.4039 19.5306C16.4039 19.1806 16.1139 18.8906 15.7639 18.8906Z' />
            </svg>
            Drag 'n' drop PNG, JPEG, BMP, HEIC file here, or click to select file, 5mb max
          </div>
        </div>
        {REACT_RECAPTCH_KEY && (
          <ReCAPTCHA sitekey={REACT_RECAPTCH_KEY} onChange={(res) => res && setRecaptcha(res)} />
        )}
        {loading ? (
          <Loader />
        ) : (
          <button className={styles.button} disabled={recaptcha ? false : true} type='submit'>
            Send
          </button>
        )}
      </form>
    );
  };
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.active]: isOpen,
      })}
      ref={supBlock}
    >
      {!!error || !!success ? onSuccess() : supportFormRender()}
    </div>
  );
}
