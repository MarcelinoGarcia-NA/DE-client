import { NextResponse } from "next/server";

export async function GET() {
    try {
      return NextResponse.json({    
            id: 1,
            image: "https://avatars.githubusercontent.com/u/64509713?v=4",
            name: "Marcelino Garcia",

      });
    } catch (error) {
      return NextResponse.error();
    }
  };