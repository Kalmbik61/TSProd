import React, { useEffect, useState } from "react";
import { SubscribeProps } from "./Subscribe.props";
import cn from "classnames";
import styles from "./Subscribe.module.scss";
import TextField from "../TextField/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import { REACT_RECAPTCH_KEY } from "../../../../config";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import Api from "../../../../http/api";
import { SubscribeInterface } from "../../../../http/interface.api";
import { FieldsTypes, InpitTypes } from "../TextField/TextField.props";

type FormValues = {
  email: string;
  also: string;
};

export default function Subscribe({ className }: SubscribeProps): JSX.Element {
  const [openSubs, setOpenSubs] = useState<boolean>(false);
  const clickSubs = () => {
    setOpenSubs(!openSubs);
    setPostData({ email: "", also: "" });
    setError("");
    setSuccess("");
  };
  const [postData, setPostData] = useState<SubscribeInterface>({ email: "", also: "" });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid"),
    telegramOrNumber: Yup.string().notRequired(),
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      also: "",
    },
  });
  useEffect(() => {
    if (success.length > 0) {
      const time = setTimeout(() => {
        setSuccess("");
        setOpenSubs(false);
      }, 1500);
      return () => clearTimeout(time);
    }
  }, [success]);
  const recaptchaResponsed = async (response: string) => {
    try {
      const res = await Api.subscribe(postData, response);
      if (res.Status === "error") {
        return setError(res.Message);
      } else {
        return setSuccess("You have subscribed to the newsletter");
      }
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
  };
  const onSubmit = async ({ email, also }: FormValues) => {
    setPostData({
      email,
      also,
    });
    reset({ email: "", also: "" });
  };
  return (
    <div
      className={cn(className, styles.subscribe, {
        [styles.openSubs]: openSubs,
      })}
    >
      <h4
        onClick={clickSubs}
        className={cn({
          [styles.openSubs]: openSubs,
        })}
      >
        Subscribe to updates
      </h4>
      <form
        className={cn(styles.subscribeBlock, {
          [styles.ok]: !!postData.email || !!postData.also,
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          field={FieldsTypes.input}
          type={InpitTypes.text}
          placeholder='E-mail'
          validation
          validRegister={{ ...register("email") }}
          autoComplete='off'
        />
        <ErrorMessage
          render={({ message }) => <div style={{ color: "red", marginTop: 3 }}>{message}</div>}
          errors={errors}
          name='email'
        />
        <TextField
          field={FieldsTypes.input}
          type={InpitTypes.text}
          placeholder='Telegram ID or Phone number'
          validation
          validRegister={{ ...register("also") }}
          autoComplete='off'
        />
        <button className={styles.button} type='submit'>
          Subscribe
        </button>
        {REACT_RECAPTCH_KEY && (
          <div
            className={cn(styles.recaptcha, {
              [styles.active]: !!postData.email || !!postData.also,
              [styles.reset]: !!error || !!success,
            })}
          >
            <ReCAPTCHA
              sitekey={REACT_RECAPTCH_KEY}
              onChange={(response) => response && recaptchaResponsed(response)}
            />
          </div>
        )}
        {(!!error || !!success) && (
          <div
            className={cn(styles.status, {
              [styles.error]: !!error,
              [styles.success]: !!success,
            })}
          >
            {error && error}
            {success && success}
          </div>
        )}
      </form>
    </div>
  );
}
