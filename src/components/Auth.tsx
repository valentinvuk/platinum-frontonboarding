import { Button, Spin, message } from "antd";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../actions";
import { LoginUserDto, LoginUserInput } from "../types/types";
import { AuthProps } from "../interfaces/interfaces";

export function Auth({ children }: AuthProps) {
    const [handleLogin, { data, loading }] = useMutation<
        { login: LoginUserDto },
        { input: LoginUserInput }
    >(LOG_IN, {
        onCompleted(data) {
            if (data) {
                localStorage.setItem("token", data.login.accessToken as string);
                const currentTime = new Date();
                const config = JSON.stringify({
                    ttl: data.login.expiresIn,
                    expiry:
                        currentTime.getTime() + +data.login.expiresIn * 1000,
                });
                localStorage.setItem("ttlExpiry", config);
            }
            message.info("You have 60 minutes of usage.");
        },
    });

    const loginClick = () => {
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
                <div
                    style={{
                        display: "flex",
                        width: "240px",
                        justifyContent: "space-between",
                    }}
                >
                    <Button onClick={loginClick} type={"primary"}>
                        Log In
                    </Button>
                    <Button>Log Out</Button>
                </div>
            ) : (
                <>
                    <h1>Welcome</h1>
                    {children}
                </>
            )}
        </div>
    );
}
