import { NextResponse } from "next/server";

export async function GET() {
    try {
        const responseData = [
            {
                id: 2,
                idDonor: 1,
                schedule: {
                    id: 2,
                    id_donor: 1,
                    date: "2024-06-17T11:00:00Z",
                    local: "Hospital XYZ",
                    status: "agendado",
                    createdAt: "2024-06-13T12:00:00Z",
                    updatedAt: "2024-06-13T12:00:00Z"
                },
                created_at: "2024-06-13T12:00:00Z",
                updated_at: "2024-06-13T12:00:00Z"
            },
            {
                id: 1,
                idDonor: 1,
                schedule: {
                    id: 3,
                    id_donor: 1,
                    date: "2024-06-18T11:00:00Z",
                    local: "Hospital XYZ",
                    status: "agendado",
                    createdAt: "2024-06-13T12:00:00Z",
                    updatedAt: "2024-06-13T12:00:00Z"
                },
                created_at: "2024-06-13T12:00:00Z",
                updated_at: "2024-06-13T12:00:00Z"
            },
            {
                id: 3,
                idDonor: 2,
                schedule: {
                    id: 3,
                    id_donor: 2,
                    date: "2024-06-19T14:00:00Z",
                    local: "Blood Center",
                    status: "agendado",
                    createdAt: "2024-06-13T12:00:00Z",
                    updatedAt: "2024-06-13T12:00:00Z"
                },
                created_at: "2024-06-13T12:00:00Z",
                updated_at: "2024-06-13T12:00:00Z"
            }
        ];

        return NextResponse.json(responseData);
    } catch (error) {
        return NextResponse.error();
    }
};
