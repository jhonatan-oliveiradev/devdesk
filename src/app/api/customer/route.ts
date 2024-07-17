import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// CREATE a customer
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, phone, address, userId } = await request.json();

  try {
    await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        address: address ? address : "",
        userId,
      },
    });

    return NextResponse.json({ message: "Cliente cadastrado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create new customer" },
      { status: 400 },
    );
  }
}

// READ customers
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const customerEmail = searchParams.get("email");

  if (!customerEmail || customerEmail === "") {
    return NextResponse.json(
      { error: "Invalid customer email" },
      { status: 400 },
    );
  }

  try {
    const customer = await prisma.customer.findFirst({
      where: {
        email: customerEmail,
      },
    });

    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch customers" },
      { status: 400 },
    );
  }
}

// UPDATE a customer
export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, name, email, phone, address, userId } = await request.json();

  try {
    await prisma.customer.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        address: address ? address : "",
        userId,
      },
    });

    return NextResponse.json({ message: "Cliente atualizado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update customer" },
      { status: 400 },
    );
  }
}

// DELETE a customer
export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get("id");

  if (!customerId) {
    return NextResponse.json({ error: "Invalid customer ID" }, { status: 400 });
  }

  const findTickets = await prisma.ticket.findFirst({
    where: {
      customerId,
    },
  });

  if (findTickets) {
    return NextResponse.json(
      { error: "Customer has tickets, please delete them first" },
      { status: 400 },
    );
  }

  try {
    await prisma.customer.delete({
      where: {
        id: customerId,
      },
    });

    return NextResponse.json({ message: "Cliente excluído com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete customer" },
      { status: 400 },
    );
  }
}
