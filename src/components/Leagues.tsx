import { useMutation, useQuery } from "@apollo/client";
import { LeagueDto, LeagueInput } from "../types/types";
import { ADD_LEAGUE, GET_LEAGUES } from "../actions";
import { Button, message, Spin } from "antd";
import { GetLeagues } from "../interfaces/interfaces";
import { useCallback } from "react";

export function Leagues() {
    const { data, loading, refetch } = useQuery<GetLeagues>(GET_LEAGUES, {
        onError(e) {
            if (e) {
                message.error(e);
            }
        },
    });

    const [addLeague] = useMutation<
        { data: LeagueDto },
        { input: LeagueInput }
    >(ADD_LEAGUE, {
        onCompleted(data) {
            if (data) {
                console.log(data);
            }
        },
    });

    const createNewLeague: () => void = () => {
        const createLeague: LeagueInput = {
            name: `Premier League ${Math.floor(Math.random() * 100)}`,
        };

        addLeague({ variables: { input: createLeague } }).catch((e) =>
            console.log(e),
        );

        message.success("New league created.");
    };

    const refetchData: () => void = async () => {
        await refetch();
    };

    const renderData: () => JSX.Element[] | undefined = useCallback(
        () =>
            data?.leagues.map((league: LeagueDto) => (
                <p key={league.id}>{league.name}</p>
            )),
        [data],
    );

    if (loading) return <Spin />;

    return (
        <>
            <div>{renderData()}</div>
            <Button onClick={refetchData} type={"primary"}>
                Refetch
            </Button>
            <Button onClick={createNewLeague}>Create new</Button>
        </>
    );
}
