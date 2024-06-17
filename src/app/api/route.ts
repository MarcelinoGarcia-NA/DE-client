import { NextResponse } from "next/server";

export async function GET() {
    try {
      return NextResponse.json(  
           "api teste para o sistema sistema DE"
      );
    } catch (error) {
      return NextResponse.error();
    }
  };