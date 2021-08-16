import { useMutation, useQuery } from "@apollo/client";
import { LeagueDto, LeagueInput } from "../types/types";
import { ADD_LEAGUE, GET_LEAGUES } from "../mutations";
import { Button, message, Spin } from "antd";

interface GetLeagues {
    leagues: LeagueDto[];
}

export function Leagues() {
    const { data, loading, error, refetch } = useQuery<GetLeagues>(
        GET_LEAGUES,
        {
            onError(e) {
                if (e) {
                    message.error(e);
                }
            },
        },
    );

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

    const refetching = async () => {
        await refetch();
    };

    const createNewLeague = () => {
        const createLeague: LeagueInput = {
            name: "Premier League",
        };

        addLeague({ variables: { input: createLeague } })
            .then((r) => console.log(r))
            .catch((e) => console.log(e));

        message.success("New league created.");
    };

    const renderData = () =>
        data?.leagues.map((league: LeagueDto) => (
            <p key={league.id}>{league.name}</p>
        ));

    if (loading) return <Spin />;
    if (error) return <div>Error encountered.</div>;

    return (
        <>
            <div>{renderData()}</div>
            <Button onClick={refetching} type={"primary"}>
                Refetch
            </Button>
            <Button onClick={createNewLeague}>Create new</Button>
        </>
    );
}
