import { Button, Spin, message } from "antd";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../actions";
import { LoginUserDto, LoginUserInput } from "../types/types";
import { AuthProps } from "../interfaces/interfaces";
import { setLocalStorage } from "../utils/setLocalStorage";
import AuthStyles from "../styles/Auth.module.scss";

export function Auth({ children }: AuthProps) {
    const [handleLogin, { data, loading }] = useMutation<
        { login: LoginUserDto },
        { input: LoginUserInput }
    >(LOG_IN, {
        onCompleted({ login }) {
            if (login) {
                setLocalStorage(login);
                message.info("You have 60 minutes of usage.");
            }
        },
    });

    const onLoginClick: () => void = () => {
        const createUser: LoginUserInput = {
            email: "val@val.com",
            password: "blabla123",
        };

        handleLogin({ variables: { input: createUser } })
            .then((r) => console.log(r.data?.login))
            .catch((e) => console.log(e));
    };

    if (loading) return <Spin />;

    return (
        <div>
            {!data ? (
                <>
                    <h1>Welcome to Platinum League</h1>
                    <div className={AuthStyles.loginContainer}>
                        <Button onClick={onLoginClick} type={"primary"}>
                            Log In
                        </Button>
                        <Button disabled={true}>Log Out</Button>
                    </div>
                </>
            ) : (
                <>
                    <h1>Welcome</h1>
                    {children}
                </>
            )}
        </div>
    );
}
