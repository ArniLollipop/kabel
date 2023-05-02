import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import cls from "./ShowChangePassword.module.scss";
import ReactPinInput from "react-pin-input";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { ProfileService } from "@/services/Profile.service";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

interface SentToEmailProps {
  className?: string;
  title: string;
  info: string;
  type: string;
  setShowChangePasswords: (value: boolean) => void;
  setShowSentTo: (value: string) => void;
  phone_number: string;
}

export const SentToEmailOrPhoneNumber = (props: SentToEmailProps) => {
  const { t } = useTranslation();
  const [smsCode, setSmsCode] = useState("");
  const [token, setToken] = useState("");
  const [countdown, setCountdown] = useState(60);
  const { title, info, setShowChangePasswords, setShowSentTo } = props;

  const funcCountDown = (value?: string) => {
    setInterval(() => {
      setCountdown((prevState: number) => {
        if (prevState > 0) {
          return prevState - 1;
        }
        return 0;
      });
    }, 1000);
  };

  const compareSmsCodeFunc = async (value: string) => {
    // send sms code to the backend IF success show passwords
    try {
      const res = await ProfileService().compareSmsCodes(value, token);
      console.log("res inside compareSmsCodeFunc is: ", res);

      // @ts-ignore
      if (res.result) {
        setShowSentTo("");
        setShowChangePasswords(true);
      }
    } catch (error) {
      console.log("error inside compareSmsCodeFunc is: ", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setToken(token);
    }
    console.log("token is: ", token);
    funcCountDown();
  }, []);

  return (
    <div className={cn(cls.SentToEmailOrPhoneNumber)}>
      <p className={cn(cls.title)}>{title}</p>
      <small className={cn(cls.info)}>{info}</small>

      <ReactPinInput
        length={4}
        initialValue=""
        type="numeric"
        style={{ margin: "35px 0" }}
        inputStyle={{
          borderColor: "#39424B",
          borderRadius: "10px",
          marginRight: "20px",
        }}
        inputFocusStyle={{ borderColor: "black" }}
        onComplete={(value: string, index: number) => {
          compareSmsCodeFunc(value);
        }}
      />

      <div className={cn(cls.sendAgainContainer)}>
        {countdown === 0 ? (
          <Button
            theme={ThemeButton.CLEAR}
            className={cn(cls.sendAgainContainer_sendAgain)}
            type="button"
            onClick={() => setCountdown(60)}
          >
            {t("getSmsAgain")}
          </Button>
        ) : (
          <span className={cn(cls.sendAgainContainer_sendAgain)}>
            {t("getSmsAgain2")} {countdown} сек.
          </span>
        )}
      </div>
    </div>
  );
};
