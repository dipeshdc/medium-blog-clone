import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { sign } from "hono/jwt"
import { signinInput, signupInput } from "@dipeshdc/medium-common";

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>()

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs are incorrect"
      })
    }  
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
      const user = await prisma.user.create({
        data:{
          email: body.email,
          name: body.name,
          password: body.password
        }
      });
    
      const token = await sign({userId: user.id}, c.env.JWT_SECRET);
      return c.text(token);
    }catch(e){
      c.status(411);
      return c.text("Inputs are invalid/ Email already present");
    }
  });
  

  userRouter.post('/signin',async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs are incorrect"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password: body.password
      }
    })
    if(!user){
      c.status(403) 
      return c.text("Incorrect credentials")
    }
  
    const token = await sign({ userId: user.id}, c.env.JWT_SECRET);
    return c.text(token);
  });

  
  