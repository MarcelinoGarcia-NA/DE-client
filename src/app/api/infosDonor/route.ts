import { NextResponse } from "next/server";

export async function GET() {
    try {
      return NextResponse.json([
        { nameInfo: 'Realizar Exame 15/05'},
        { nameInfo: 'Resultado de Exames 20/05'},
        { nameInfo: 'Precisamos de sangue tipo AB'},
      ]);
    } catch (error) {
      return NextResponse.error();
    }
  };