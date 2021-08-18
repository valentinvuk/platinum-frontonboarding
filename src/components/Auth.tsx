import { Button, Spin, message } from "antd";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../actions";
import { LoginUserDto, LoginUserInput } from "../types/types";
import { AuthProps } from "../interfaces/interfaces";
import { setLocallyUserAuthData } from "../utils/setLocallyUserAuthData";
import AuthStyles from "../styles/Auth.module.scss";
import Title from "antd/es/typography/Title";

export function Auth({ children }: AuthProps) {
    const [handleLogin, { data, loading }] = useMutation<
        { login: LoginUserDto },
        { input: LoginUserInput }
    >(LOG_IN, {
        onCompleted({ login }) {
            if (login) {
                setLocallyUserAuthData(login);
                message.info("You have 60 minutes of usage.");
            }
        },
    });

    const onLoginClick: () => void = () => {
        const createUser: LoginUserInput = {
            email: "val@val.com",
            password: "blabla123",
        };

        handleLogin({ variables: { input: createUser } }).catch((e) =>
            console.log(e),
        );
    };

    if (loading) return <Spin />;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            {!data ? (
                <>
                    <div className={AuthStyles.top}>
                        <Title>Welcome to Platinum League</Title>
                    </div>
                    <div className={AuthStyles.middle}>
                        <Button onClick={onLoginClick} type={"primary"}>
                            Log In
                        </Button>
                        <Button disabled={true}>Log Out</Button>
                    </div>
                </>
            ) : (
                <>
                    <Title className={AuthStyles.text}>
                        All leagues in the world
                    </Title>
                    {children}
                </>
            )}
        </div>
    );
}
