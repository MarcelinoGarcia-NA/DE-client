
import { NextResponse } from "next/server";

let listUser: User[] = [{
  name: "Marcelino",
  email: "marcelino@gmail.com",
  password: "123"
}
];

interface User {
  name: string,
  email: string;
  password: string;
}

export async function GET() {
  try {
    return NextResponse.json(listUser);
  } catch (error) {
    return NextResponse.error();
  }
};

export async function POST(request: NextApiRequest) {
  const { name, email, password }: User = await request.json();

  const user = {
    name: name,
    email: email,
    password: password
  }

  try {
    listUser.push(user);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
};