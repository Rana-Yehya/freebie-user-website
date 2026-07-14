import axios from "axios";
import type { NextRequest } from 'next/server'

type User = {
    id: number;
    userId: string;
    username: string;
    title: string;
    body: string;
};
export async function GET(_req: NextRequest) { //, ctx: RouteContext<'/users/[id]'>



    const response = await axios.get<User[]>(
        "https://fake-json-api.mock.beeceptor.com/users",
        {
            // httpsAgent: agent,
            timeout: 10000, // 10 second timeout
        },
    );
    const users: User[] = response.data;
    console.log(users);
    return users;

}
