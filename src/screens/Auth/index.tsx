import React, { FC, useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { IAuthData } from "./types";
import { styles } from "./styles";
import { AppLoader } from "../../components/AppLoader";
import { AppField } from "../../components/AppField";
import { AppButton } from "../../components/AppButton";

export const AuthScreen: FC = () => {
  const { isLoading, login, register } = useAuth();
  const [data, setData] = useState<IAuthData>({} as IAuthData);
  const [isReg, setIsReg] = useState(false);
  const {email, password, name} = data;

  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const authHandler = useCallback(async () => {

    if (!email || email.length < 8) return setIsEmailError(true);
    if (!name && isReg) return setIsNameError(true);
    if (!password || password.length < 6) return setIsPasswordError(true);

    if (isReg) await register(email, password, name);
    else await login(email, password);

    setData({} as IAuthData);
  }, [isReg, email, password, name]);

  const emailHandler = useCallback((value: string) => {
    setData({...data, email: value});
    setIsEmailError(false);
  }, [email, name, password]);

  const nameHandler = useCallback((value: string) => {
    setData({...data, name: value});
    setIsNameError(false);
  }, [email, name, password]);

  const passwordHandler = useCallback((value: string) => {
    setData({...data, password: value});
    setIsPasswordError(false);
  }, [email, name, password]);

  return (
    <View style={styles.auth}>
      <View style={styles.block}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {isReg ? "Регистрация" : "Авторизация"}
          </Text>
          {isLoading
            ? <AppLoader/>
            : <>
              <AppField
                value={data.email}
                placeholder={"Введите почту"}
                onChange={emailHandler}
                isDanger={isEmailError}
                dangerText="Слишком короткий email"
              />
              {isReg && <AppField
                value={data.name}
                placeholder={"Введите ФИО"}
                onChange={nameHandler}
                isDanger={isNameError}
                dangerText="ФИО слишком короткий"
              />}

              <AppField
                value={data.password}
                placeholder={"Введите пароль"}
                onChange={passwordHandler}
                isSecure={true}
                isDanger={isPasswordError}
                dangerText="Пароль меньше 6 символов"
              />
              <AppButton onPress={authHandler} title={isReg ? "Зарегистрироваться" : "Авторизоваться"}/>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.text}>{isReg ? "Авторизация" : "Регистрация"}</Text>
              </Pressable>
            </>
          }
        </View>
      </View>
    </View>
  );
};
