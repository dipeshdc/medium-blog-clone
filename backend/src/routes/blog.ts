import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from "@dipeshdc/medium-common";


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    },
    Variables:{
        userId: string;
        
    }
  }>()


blogRouter.use('/*', async (c,next) => {
    try{
    const header = c.req.header('authorization') || "";
    const token = header.split(" ")[1];
  
    const payload = await verify(token, c.env.JWT_SECRET);
    if (typeof payload.userId === 'string') {
        c.set('userId', payload.userId); 
    } else {
        return c.text('Invalid token payload: userId is not a string');
    }

    await next();
    }catch(e){
      c.status(403)
      return c.json({
        message: "You are not logged in"
      });
    }
  })
  
  
  
  blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs are invalid"
      })
    }
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    

    const user = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId
        }
    });

    return c.json({
        id: user.id
    })
  })
  
  blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs are invalid"
      })
    }
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      
      await prisma.post.update({
        where:{
            id: body.id,
            authorId
        },
        data: body
      })
    return c.json({
        message: "Blog has been updated"
    })
  })

  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      
      const blogs = await prisma.post.findMany({
        select: {
          id: true,
          title: true,
          content: true,
          author: {
            select: {
              name: true
            }
          }
        }
      });

      return c.json({
        blogs
      });
  })

  blogRouter.get('/isuser', (c) =>{
    return c.json({
      user: true
    });
  })
  
  blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate());
      const postId = c.req.param('id');

      try{
        const blog = await prisma.post.findFirst({
            where:{
                id: postId
            },
            select:{
              id: true,
              title: true,
              content: true,
              author: {
                select: {
                  name: true
                }
              }
            }
        })
        return c.json({
            blog
        });
      }catch(e){
        c.status(411)
        return c.json({
            message: "Blog not found"
        });
      }
  });

  blogRouter.get('/isuser', (c) =>{
    return c.json({
      user: true
    });
  })

