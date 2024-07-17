import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// Change ticket status
export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();

  const findTicket = await prisma.ticket.findFirst({
    where: {
      id: id as string,
    },
  });

  if (!findTicket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  try {
    await prisma.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FECHADO",
      },
    });

    return NextResponse.json({ success: "Ticket updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }
}

// Open a new ticket
export async function POST(request: NextRequest) {
  const { customerId, name, description } = await request.json();

  if (!customerId || !name || !description) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    await prisma.ticket.create({
      data: {
        name,
        description,
        status: "ABERTO",
        customerId,
      },
    });

    return NextResponse.json({ message: "Ticket success opened." });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create ticket" },
      { status: 500 },
    );
  }
}
